import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Toolbar } from "@mui/material";
import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";

const FrontPageGenerator = dynamic(
  () => import("../components/FrontPageGenerator"),
  { ssr: false }
);

export default function Index() {
  return (
    <>
      <Navbar />
      <Toolbar />
      <FrontPageGenerator />
    </>
  );
}
