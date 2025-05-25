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
  compilerAssignments,
  eComAssignments,
  javaAssignments,
} from "../../constants";
import { useState } from "react";
import { useBaseStore } from "../../../src/store";

export default function useFrontPageGenerator() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function generateFrontPage({
    sem,
    roll,
    subject,
    assignmentNumber,
    assignmentName,
    wordFiles,
  }: {
    sem: string;
    roll: number;
    subject: string;
    assignmentNumber: number;
    assignmentName?: string;
    wordFiles: {
      setWordFile: (data: {
        subject: string;
        content: ArrayBuffer;
      }) => void;
    } & {
      [key: string]: ArrayBuffer | null;
    };
  }) {
    setLoading(true);
    setError(null);
    if (!roll) {
      return;
    }
    const { error, content } = await prefetchDocument({
      sem,
      wordFiles,
      subject,
      roll,
      setLoad: true,
    });

    if (error !== null) {
      setError(error);
      setLoading(false);
      return;
    }
    setError(null);

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
      ECom: eComAssignments,
      Compiler: compilerAssignments,
      Java: javaAssignments,
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
  }
  return { generateFrontPage, error, loading, setError };
}

export async function prefetchDocument({
  sem,
  wordFiles,
  subject,
  roll,
  setLoad,
}: {
  sem: string;
  wordFiles: {
    setWordFile: (data: {
      subject: string;
      content: ArrayBuffer;
    }) => void;
  } & {
    [key: string]: ArrayBuffer | null;
  };
  subject: string;
  roll: number | string;
  setLoad?: boolean;
}): Promise<
  | {
      content: ArrayBuffer;
      error: null;
    }
  | {
      content: null;
      error: string;
    }
> {
  useBaseStore.setState({ wordFileLoaded: 0 });
  if (subject === "DL") {
    if (roll === "0" || !roll) {
      return {
        content: null,
        error: "Invalid roll number",
      };
    }
    subject =
      names[sem][roll][2] == "A" ? "DL Section A" : "DL Section B";
  } else if (
    ![
      "NCC Index",
      "SE Index",
      "ECom Index",
      "Compiler Index",
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
    return { content, error: null };
  }

  const link = `/static/word-templates/${subject}.docx?${Date.now()}`;

  // console.log(`Downloading ${subject}`);
  try {
    const response = await fetch(link);
    if (!response.ok) {
      return {
        content: null,
        error: "File downloading failed",
      };
    }
    const contentLength =
      response.headers.get("content-length") || "";
    const total = parseInt(contentLength, 10);
    let loaded = 0;
    const res = new Response(
      new ReadableStream({
        async start(controller) {
          if (!response.body) {
            throw new Error(
              "ReadableStream not yet supported in this browser."
            );
          }
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
    return { content, error: null };
  } catch (error) {
    console.log(error);
    return {
      content: null,
      error: "File downloading failed",
    };
  }
}
