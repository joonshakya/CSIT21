import { Button } from "@mui/material";
import { prefetchDocument } from "../utils/frontPageGenerator";
import { useEffect, useContext } from "react";
import useFrontPageGenerator from "../utils/frontPageGenerator";
import { WordContext } from "../context/wordContext";

export default function NonSSRFrontPageButton({
  roll,
  assignmentNumber,
  subject,
  namePicker,
}) {
  const wordFiles = useContext(WordContext);

  const [generateFrontPage, error, loading] = useFrontPageGenerator();

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error, loading]);

  useEffect(() => {
    prefetchDocument({ wordFiles, subject, roll });
  }, [subject, roll]);

  return (
    <Button
      onClick={() => {
        if (roll === "0" || !roll) {
          namePicker.current.select();
          return;
        }
        generateFrontPage({
          roll,
          assignmentNumber,
          subject,
          wordFiles,
        });
      }}
      size="small"
    >
      Generate Front Page
    </Button>
  );
}
