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
  return (
    <Button type="submit" size="small">
      Generate Front Page
    </Button>
  );
}
