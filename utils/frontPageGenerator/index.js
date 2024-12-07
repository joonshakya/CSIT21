import generateDocument from "./useMailMerge";
import {
  names,
  dlAssignments,
  fitAssignments,
  dsAssignments,
  oopAssignments,
  caAssignments,
  nmAssignments,
  dsaAssignments,
  cnAssignments,
  dbmsAssignments,
  tocAssignments,
  simulationAssignments,
  webTechAssignments,
  nccAssignments,
} from "../constants";
import { useState } from "react";
import { useBaseStore } from "../../src/store";

export default function useFrontPageGenerator() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const generateFrontPage = async ({
    sem,
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
      sem,
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
      DSA: dsaAssignments,
      CN: cnAssignments,
      DBMS: dbmsAssignments,
      TOC: tocAssignments,
      Simulation: simulationAssignments,
      "Web Tech": webTechAssignments,
      NCC: nccAssignments,
    };

    if (
      Object.prototype.hasOwnProperty.call(assignmentMap, subject)
    ) {
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
      name: names[sem][roll][0],
      roll: names[sem][roll][1],
      assignmentNumber,
      assignmentName,
      assignmentNameUpper: assignmentName?.toUpperCase(),
      subject: indexSubjectTable[subject],
      section: names[sem][roll][2],
      openBr: "{",
      closeBr: "}",
    };

    const outputName = `${names[sem][roll][0]} - ${
      subject.includes("Index")
        ? `${subject}`
        : `${subject} Lab ${assignmentNumber}`
    } - Front Page.docx`;
    generateDocument(
      { content, data, outputName },
      setError,
      setLoading
    );
  };
  return [generateFrontPage, error, loading, setError];
}

export async function prefetchDocument({
  sem,
  wordFiles,
  subject,
  roll,
  setLoad,
}) {
  useBaseStore.setState({ wordFileLoaded: 0 });

  if (subject === "DL") {
    if (roll === "0" || !roll) {
      return;
    }
    subject =
      names[sem][roll][2] == "A" ? "DL Section A" : "DL Section B";
  } else if (
    ![
      "Web Tech Index",
      "Simulation Index",
      "DAA Index",
      "MM Index",
      "TOC Index",
      "DBMS Index",
      "CN Index",
      "AI Index",
      "CG Index",
      "CA Index",
      "DSA Index",
      "NM Index",
    ].includes(subject) &&
    subject.includes("Index")
  ) {
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
