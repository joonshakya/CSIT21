import Navbar from "../components/Navbar";
import FrontPageGenerator from "../components/FrontPageGenerator";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>CSIT21 Beta</title>
      </Head>
      <Navbar />
      <FrontPageGenerator />
      {/* <Soon /> */}
    </>
  );
}
