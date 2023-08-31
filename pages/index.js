import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FrontPageGenerator from "../components/FrontPageGenerator";
import Head from "next/head";
import { Box, Container, Grid, Toolbar } from "@mui/material";
import Materials from "../components/Materials";
import Soon from "../components/Soon";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import OpCodeFinder from "../components/OpCodeFinder";
import TallyBar from "../components/TallyBar";
// import ClassRoutine from "../components/ClassRoutine";
import ExamRoutine from "../components/ExamRoutine";
import CheckForUpdate from "../components/CheckForUpdate";
import { DevCppAdminNoAdminDialog } from "../components/DevCppAdminNoAdminDialog";
import { examTypes, currentJoonSem } from "../utils/constants";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const router = useRouter();

  let semParam = router.asPath.split("/")[1];

  if (semParam === currentJoonSem.split("sem")[1]) {
    semParam = "";
  }

  const sem = semParam ? `sem${parseInt(semParam)}` : "";

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (semParam) return;
    const localStorageSem = localStorage.getItem("sem");
    if (!localStorageSem || localStorageSem === currentJoonSem.split("sem")[1])
      return;
    Router.replace(`/${localStorageSem}`);
  }, [semParam, sem]);

  return (
    <>
      <Head>
        <title>CSIT21 - SXC B.Sc. CSIT Batch 2021</title>
        <meta
          property="og:image"
          content="https://www.csit21.cf/thumbnail.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.csit21.cf/thumbnail.png"
        />
        <meta property="og:image:width" content="1307" />
        <meta property="og:image:height" content="878" />
        <meta
          property="og:title"
          content="CSIT21 - SXC B.Sc. CSIT Batch 2021"
        />
        <meta property="og:description" content="Class Documents on the go" />
        <meta property="og:url" content="https://www.csit21.cf/" />
      </Head>
      <Navbar
        text={`CSIT21${semParam ? ` - Sem ${parseInt(semParam)}` : ""}`}
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
                item
                sm={6}
                md={7}
                sx={{
                  mx: "auto",
                }}
              >
                <Materials sem={sem || currentJoonSem} />
                <DevCppAdminNoAdminDialog />
                {sem === "" ? (
                  <>
                    <ExamRoutine
                      examType={examTypes.pre}
                      sem="sem3"
                      title="Pre Board Exam Routine"
                      subtitle={
                        <>
                          Exam time: 6:15 AM - 9:15 AM
                          <br />
                          Section A: Room 103, Section B: Room 104
                        </>
                      }
                    />
                    {/* <ClassRoutine /> */}
                    <ExamRoutine
                      examType={examTypes.board}
                      sem="sem3"
                      title="Board Exam Routine"
                      subtitle={<>Exam time: 12:00 PM - 3:00 PM</>}
                    />
                  </>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <FrontPageGenerator />
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid
                      item
                      sm={12}
                      sx={{
                        mx: "auto",
                      }}
                    >
                      <OpCodeFinder operate={isDesktop} />
                    </Grid>
                    <Grid
                      item
                      sm={12}
                      sx={{
                        mx: "auto",
                      }}
                    >
                      <TallyBar />
                    </Grid>
                    <Grid
                      item
                      sm={12}
                      sx={{
                        mx: "auto",
                      }}
                    >
                      <Soon />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid
                className="hidden"
                item
                sm={12}
                sx={{
                  mx: "auto",
                  display: {
                    xs: "block",
                    sm: "none",
                  },
                }}
              >
                <OpCodeFinder operate={!isDesktop} />
                <TallyBar />
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
