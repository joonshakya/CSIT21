import generateDocument from "./useMailMerge";
import constants from "./constants";
import { useEffect, useState } from "react";
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
    const {
      names,
      dlAssignments,
      fitAssignments,
      dsAssignments,
      oopAssignments,
    } = constants;
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
    if (subject === "DL") {
      assignmentName = dlAssignments.find(
        (assignment) => assignment.number === assignmentNumber
      ).name;
    } else if (subject === "FIT") {
      assignmentName = fitAssignments.find(
        (assignment) => assignment.number === assignmentNumber
      ).name;
    } else if (subject === "DS") {
      assignmentName = dsAssignments.find(
        (assignment) => assignment.number === assignmentNumber
      ).name;
    } else if (subject === "OOP") {
      assignmentName = oopAssignments.find(
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

  const { names } = constants;
  if (subject === "DL") {
    if (roll === "0" || !roll) {
      return;
    }
    subject = names[roll][2] == "A" ? "DL Section A" : "DL Section B";
  } else if (subject.includes("Index")) {
    subject = "Index";
  }

  let content = wordFiles[subject];
  if (content) {
    // console.log(`Using cached ${subject}`);
    return { content, error: false };
  }

  const link = `/static/word-templates/${subject}.docx?${Date.now()}`;

  // console.log(`Downloading ${subject}`);
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
          if (setLoad) {
            loaded += value.byteLength;
            if (i % 50 === 0) {
              console.log(subject, (loaded / total) * 100);
              useBaseStore.setState({ wordFileLoaded: (loaded / total) * 100 });
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
}
