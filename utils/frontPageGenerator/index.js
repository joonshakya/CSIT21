import generateDocument from "./useMailMerge";
import constants from "./constants";
import { useState } from "react";

export default function useFrontPageGenerator() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const generateFrontPage = ({
    roll,
    subject,
    assignmentNumber,
    assignmentName,
  }) => {
    setLoading(true);
    const { dlAssignments, fitAssignments, names } = constants;
    if (subject === "DL") {
      names[roll][2] == "A" ? (subject = "DL Section A") : "DL Section B";
      assignmentName = dlAssignments.find(
        (assignment) => assignment.number === assignmentNumber
      ).name;
    } else if (subject === "FIT") {
      assignmentName = fitAssignments.find(
        (assignment) => assignment.number === assignmentNumber
      ).name;
    }
    const link = `/static/word-templates/${subject}.docx`;

    const data = {
      name: names[roll][0],
      roll: names[roll][1],
      assignmentNumber,
      assignmentName,
      section: names[roll][2],
    };

    const outputName = `${names[roll][0]} - ${subject} - Assignment ${assignmentNumber} - Front Page.docx`;
    generateDocument({ data, link, outputName }, setError, setLoading);
  };
  return [generateFrontPage, error, loading];
}
