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
      }}
    >
      <a
        href="/"
        style={{
          color: "white",
          margin: "1rem",
          textAlign: "center",
        }}
      >
        Copyright © SXC B.Sc. CSIT Batch 2021
      </a>
      <Typography
        color="white"
        sx={{
          m: "1rem",
          textAlign: "center",
        }}
      >
        V0.1.1 Beta
      </Typography>
    </Toolbar>
  );
};

export default Footer;
