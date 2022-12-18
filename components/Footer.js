import { Toolbar, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Toolbar
      sx={{
        background: "linear-gradient(90deg, #3498db, #8e44ad)",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        py: "1rem",
        pb: "env(safe-area-inset-bottom)",
      }}
    >
      <a
        href="/"
        style={{
          color: "white",
          margin: ".4rem",
          textAlign: "center",
        }}
      >
        Copyright © SXC B.Sc. CSIT Batch 2021
      </a>
      <Typography
        color="white"
        sx={{
          margin: ".4rem",
          textAlign: "center",
        }}
      >
        V0.1.7 Beta
      </Typography>
    </Toolbar>
  );
};

export default Footer;
