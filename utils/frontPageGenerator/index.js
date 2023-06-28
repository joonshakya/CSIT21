import generateDocument from "./useMailMerge";
import {
  names,
  dlAssignments,
  fitAssignments,
  dsAssignments,
  oopAssignments,
  caAssignments,
  nmAssignments,
} from "../constants";
import { useState } from "react";
import { useBaseStore } from "../../src/store";

export default function useFrontPageGenerator() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const generateFrontPage = async ({
    roll,
    subject,
    assignmentNumber,
    assignmentName,
    wordFiles,
  }) => {
    setLoading(true);
    setError(null);
    if (roll === "0" || !roll) {
      return;
    }
    const { error, content } = await prefetchDocument({
      wordFiles,
      subject,
      roll,
      setLoad: true,
    });
    if (error) {
      setError(error);
      setLoading(false);
      return;
    } else {
      setError(null);
    }

    const assignmentMap = {
      DL: dlAssignments,
      FIT: fitAssignments,
      DS: dsAssignments,
      OOP: oopAssignments,
      CA: caAssignments,
      NM: nmAssignments,
    };

    if (Object.prototype.hasOwnProperty.call(assignmentMap, subject)) {
      assignmentName = assignmentMap[subject].find(
        (assignment) => assignment.number === assignmentNumber
      ).name;
    }

    const indexSubjectTable = {
      "DS Index": "DISCRETE STRUCTURE",
      "OOP Index": "OBJECT ORIENTED PROGRAMMING",
      "μP Index": "MICROPROCESSOR",
    };

    const data = {
      name: names[roll][0],
      roll: names[roll][1],
      assignmentNumber,
      assignmentName,
      subject: indexSubjectTable[subject],
      section: names[roll][2],
    };

    const outputName = `${names[roll][0]} - ${
      subject.includes("Index")
        ? `${subject}`
        : `${subject} Assignment ${assignmentNumber}`
    } - Front Page.docx`;
    generateDocument({ content, data, outputName }, setError, setLoading);
  };
  return [generateFrontPage, error, loading, setError];
}

export async function prefetchDocument({ wordFiles, subject, roll, setLoad }) {
  useBaseStore.setState({ wordFileLoaded: 0 });

  if (subject === "DL") {
    if (roll === "0" || !roll) {
      return;
    }
    subject = names[roll][2] == "A" ? "DL Section A" : "DL Section B";
  } else if (subject !== "CG Index" && subject.includes("Index")) {
    subject = "Index";
  }

  let content = wordFiles[subject];
  if (content) {
    // console.log(`Using cached ${subject}`);
    return { content, error: false };
  }

  const link = `/static/word-templates/${subject}.docx?${Date.now()}`;

  // console.log(`Downloading ${subject}`);
  try {
    const response = await fetch(link);
    if (!response.ok) {
      return { error: "File downloading failed" };
    }
    const contentLength = response.headers.get("content-length");
    const total = parseInt(contentLength, 10);
    let loaded = 0;
    const res = new Response(
      new ReadableStream({
        async start(controller) {
          const reader = response.body.getReader();
          for (let i = 0; ; i++) {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }
            loaded += value.byteLength;
            if (setLoad) {
              if (i % 50 === 0) {
                useBaseStore.setState({
                  wordFileLoaded: (loaded / total) * 100,
                });
              }
            }
            controller.enqueue(value);
          }
          controller.close();
        },
      })
    );
    content = await res.arrayBuffer();
    // console.log(`Downloaded ${subject}`);
    wordFiles.setWordFile({ subject, content });
    return { content, error: false };
  } catch (error) {
    console.log(error);
    return { error: "File downloading failed" };
  }
}
