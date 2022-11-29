import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FrontPageGenerator from "../components/FrontPageGenerator";
import Head from "next/head";
import { Box, Container, Grid, Toolbar } from "@mui/material";

export default function Index() {
  return (
    <>
      <Head>
        <title>CSIT21 Beta</title>
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
          <Grid container spacing={4}>
            <Grid
              item
              sm={6}
              md={7}
              sx={{
                mx: "auto",
              }}
            >
              <FrontPageGenerator />
            </Grid>
            <Grid
              item
              sm={6}
              md={5}
              sx={{
                mx: "auto",
              }}
            >
              <FrontPageGenerator />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Box>
      {/* <Soon /> */}
    </>
  );
}
