import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FrontPageGenerator from "../components/FrontPageGenerator";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid2";
import dynamic from "next/dynamic";

import Materials from "../components/Materials";
import Soon from "../components/Soon";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import OpCodeFinder from "../components/OpCodeFinder";
import TallyBar from "../components/TallyBar";
import ClassRoutine from "../components/ClassRoutine";
import ExamRoutine from "../components/ExamRoutine";
import CheckForUpdate from "../components/CheckForUpdate";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Downlaods from "../components/Downloads";
import Feedback from "../components/Feedback";
import Countdown from "../components/Countdown";
import { currentJoonSem, examTypes } from "../constants";
import { Sem } from "../constants/types";
// import LeftSideCardMessage from "../components/LeftSideCardMessage";

function Index() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const router = useRouter();

  let semParam = router.asPath.split("/")[1];

  async function checkCollegeEmail() {
    let imgs: HTMLImageElement[] = [];
    const authuser = 1;
    imgs[authuser] = document.createElement("img");
    imgs[authuser].src =
      "https://drive.google.com/thumbnail?id=1f0uYyaFOd_oI4Gda5FFmtao-obpz9HVT&authuser=" +
      authuser;
    imgs[authuser].style.display = "none";
    document.body.appendChild(imgs[authuser]);
    imgs[authuser].onload = function () {
      // if (firstAuthuser != authuser || notify) {
      //   showToast("Cool, you are in 12 'G'" + authuser, "success");
      console.log("found authuser: ", authuser);
      localStorage.setItem("authuser", authuser.toString());
      // changeLink(authuser);
    };
    // imgs[authuser].onerror = function () {
    //   noUser++;
    //   if (noUser == 20) {
    //     showToast(
    //       "Hmm, it seems you are not from 12 'G'.<br>If you are, log into google classroom website with the college email.",
    //       "error"
    //     );
    //     $(".warning-login").show();
    //   }
    // };
  }

  useEffect(() => {
    checkCollegeEmail();
  }, []);

  const [sem, setSem] = useState<Sem | null>(
    (() => {
      if (typeof window === "undefined") return null;
      if (semParam) {
        const semParamNum = parseInt(semParam);
        if (
          semParamNum >= 1 ||
          semParamNum <= parseInt(currentJoonSem.split("sem")[1])
        ) {
          localStorage.setItem("sem", semParam);
          Router.replace(`/`);
          return `sem${semParamNum}` as Sem;
        }
        localStorage.setItem("sem", currentJoonSem.split("sem")[1]);
        Router.replace(`/`);
        return null;
      }
      return localStorage.getItem("sem")
        ? (`sem${localStorage.getItem("sem")}` as Sem)
        : null;
    })()
  );

  useEffect(() => {
    if (sem) {
      localStorage.setItem("sem", sem.split("sem")[1]);
    }
  }, [sem]);

  return (
    <>
      <Navbar
        text={`CSIT21 - Sem ${
          (sem || currentJoonSem).split("sem")[1]
        }`}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Container
          sx={{
            py: 4,
            flex: 1,
          }}
        >
          <Box
            sx={{
              p: "env(safe-area-inset-top) env(safe-area-inset-right) 0 env(safe-area-inset-left)",
            }}
          >
            <Grid container spacing={2}>
              <Grid
                sx={{
                  mx: "auto",
                }}
                size={{ xs: 12, sm: 10, md: 7 }}
              >
                <Materials
                  sem={sem || currentJoonSem}
                  setSem={setSem}
                />

                {/* Components */}

                {/* <ExamRoutine
                      examType={examTypes.prac}
                      sem={sem || currentJoonSem}
                      title="Practical Exam Routine"
                    /> */}
                {/* <ClassRoutine sem={sem || currentJoonSem} /> */}
                {/* <ExamRoutine
                      examType={examTypes.board}
                      sem="sem3"
                      subtitle={<>Exam time: 12:00 PM - 3:00 PM</>}
                    /> */}
                {/* <ExamRoutine examType={examTypes.prac} sem="sem3" /> */}
                {/* <LeftSideCardMessage title="Happy Dashain" /> */}
                {/* End Components */}
                {sem === null || sem === currentJoonSem ? (
                  <>
                    <ExamRoutine
                      examType={examTypes.prac}
                      title="6th Sem Practical Exam Routine"
                      subtitle="Venue: Lab A and Lab B"
                      sem={"sem6"}
                    />
                    <ClassRoutine sem={sem || currentJoonSem} />
                  </>
                ) : null}
                {sem === "sem6" ? (
                  <>
                    <ExamRoutine
                      examType={examTypes.prac}
                      subtitle="Venue: Lab A and Lab B"
                      sem={"sem6"}
                    />
                    <ExamRoutine
                      examType={examTypes.pre}
                      sem={sem || currentJoonSem}
                      subtitle={
                        <>
                          Exam time: 6:15 AM - 9:15 AM
                          <br />
                          Room 315 (Section A), Room 321 (Section B)
                        </>
                      }
                    />
                    <ExamRoutine
                      examType={examTypes.board}
                      sem={sem || currentJoonSem}
                      subtitle={<>Exam time: 12:00 PM - 3:00 PM</>}
                    />
                    <ClassRoutine sem={sem || currentJoonSem} />
                  </>
                ) : null}
                {sem === "sem5" ? (
                  <>
                    {/* <ExamRoutine
                      examType={examTypes.prac}
                      sem={sem}
                    /> */}

                    <ClassRoutine sem={sem} />
                  </>
                ) : null}
                {sem === "sem4" ? (
                  <>
                    {/* <ExamRoutine
                      examType={examTypes.board}
                      sem={sem}
                      subtitle={<>Exam time: 12:00 AM - 03:00 AM</>}
                    /> */}
                    <ClassRoutine sem={sem} />
                  </>
                ) : null}
                {sem === "sem3" ? (
                  <>
                    {/* <ExamRoutine
                      examType={examTypes.board}
                      sem={sem}
                      subtitle={<>Exam time: 12:00 AM - 03:00 AM</>}
                    /> */}
                    <ClassRoutine sem={sem} />
                  </>
                ) : null}
                {sem === "sem2" ? (
                  <>
                    {/* <ExamRoutine
                      examType={examTypes.board}
                      sem={sem}
                      subtitle={<>Exam time: 12:00 PM - 3:00 PM</>}
                    /> */}
                    <ClassRoutine sem={sem} />
                  </>
                ) : null}
              </Grid>
              <Grid
                sx={{
                  mx: "auto",
                }}
                size={{ xs: 12, sm: 10, md: 5 }}
              >
                <FrontPageGenerator sem={sem || currentJoonSem} />
                <Downlaods />
                <OpCodeFinder operate={isDesktop} />
                <TallyBar />
                <Feedback sem={sem || currentJoonSem} />
                <Soon />
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Footer />
        <CheckForUpdate />
      </Box>
    </>
  );
}

export default dynamic(() => Promise.resolve(Index), {
  ssr: false,
});
