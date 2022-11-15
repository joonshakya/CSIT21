import Navbar from "../components/Navbar";
import FrontPageGenerator from "../components/FrontPageGenerator";
import Soon from "../components/Soon";

// const FrontPageGenerator = dynamic(
//   () => import("../components/FrontPageGenerator"),
//   { ssr: false }
// );

export default function Index() {
  return (
    <>
      <Navbar />
      <FrontPageGenerator />
      <Soon />
    </>
  );
}
