import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FrontPageGenerator from "../components/FrontPageGenerator";
import Head from "next/head";
import { Box, Container, Grid, Toolbar } from "@mui/material";
import Sem2 from "../components/Sem2";
import Soon from "../components/Soon";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import OpCodeFinder from "../components/OpCodeFinder";
import ClassRoutine from "../components/ClassRoutine";
export default function Index() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Head>
        <title>CSIT21 - SXC B.Sc. CSIT Batch 2021</title>
        <meta property="og:type" content="profile" />
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
        <meta property="fb:app_id" content="1265498347173300" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/static/favicon/safari-pinned-tab.svg"
          color="#fbddeb"
        />
        <meta name="msapplication-TileColor" content="#fbddeb" />

        <meta name="theme-color" content="#6671c6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-title" content="CSIT21" />
        <meta name="mobile-web-app-capable" content="yes" />

        <link rel="manifest" href="./manifest.json" />

        <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
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
          <Grid container spacing={2}>
            <Grid
              item
              sm={6}
              md={7}
              sx={{
                mx: "auto",
              }}
            >
              <Sem2 />
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
              <Soon />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Box>
    </>
  );
}
