import generateDocument from "./useMailMerge";
import constants from "./constants";
import { useState } from "react";

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
    const { names, dlAssignments, fitAssignments, dsAssignments } = constants;
    setLoading(true);
    if (roll === "0" || !roll) {
      return;
    }
    const content = await prefetchDocument({ wordFiles, subject, roll });
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
    }

    const data = {
      name: names[roll][0],
      roll: names[roll][1],
      assignmentNumber,
      assignmentName,
      section: names[roll][2],
    };

    const frontPageType = subject === "DS Index" ? "Index" : "Assignment";
    const outputName = `${names[roll][0]} - ${subject} - ${frontPageType} ${assignmentNumber} - Front Page.docx`;
    generateDocument({ content, data, outputName }, setError, setLoading);
  };
  return [generateFrontPage, error, loading];
}

export async function prefetchDocument({ wordFiles, subject, roll }) {
  const PizZipUtils = await import("pizzip/utils/index.js");

  const { names } = constants;
  if (subject === "DL") {
    if (roll === "0" || !roll) {
      return;
    }
    subject = names[roll][2] == "A" ? "DL Section A" : "DL Section B";
  }

  let content = wordFiles[subject];
  if (content) {
    // console.log(`Using cached ${subject}`);
    return content;
  }

  const link = `/static/word-templates/${subject}.docx`;
  content = await new Promise((resolve, reject) => {
    PizZipUtils.getBinaryContent(link, (error, content) => {
      resolve(content);
      reject(error);
    });
  });
  // console.log(`Downloaded ${subject}`);
  wordFiles.setWordFile({ subject, content });
  return content;
}
