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
import ClassRoutine from "../components/ClassRoutine";
// import ExamRoutine from "../components/ExamRoutine";
import CheckForUpdate from "../components/CheckForUpdate";
// import { practicalBatch2021RoutineSem2 } from "../utils/constants";
export default function Index() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

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
      <Navbar />
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
                <Materials />
                {/* <ExamRoutine
                  // routine={preBoardsBatch2021Routine}
                  routine={practicalBatch2021RoutineSem2}
                  title="Practical Exam Routine"
                  subtitle="Exam time: 7:00 AM - 9:00 AM"
                /> */}
                <ClassRoutine />
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
