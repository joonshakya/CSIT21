import Navbar from "../components/Navbar";
import FrontPageGenerator from "../components/FrontPageGenerator";

// const FrontPageGenerator = dynamic(
//   () => import("../components/FrontPageGenerator"),
//   { ssr: false }
// );

export default function Index() {
  return (
    <>
      <Navbar />
      <FrontPageGenerator />
    </>
  );
}
