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
      <FrontPageGenerator />
    </>
  );
}
