import { Toolbar, Typography, Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Toolbar
      sx={{
        background: "linear-gradient(90deg, #3498db, #8e44ad)",
        p: "0 env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          py: "1rem",
        }}
      >
        <Link
          href="/"
          style={{
            color: "white",
            margin: ".4rem 1rem",
            textAlign: "center",
          }}
        >
          Copyright © SXC B.Sc. CSIT Batch 2021
        </Link>
        <Typography
          color="white"
          sx={{
            margin: ".4rem 1rem",
            textAlign: "center",
          }}
        >
          V0.2.1
        </Typography>
      </Box>
    </Toolbar>
  );
};

export default Footer;
