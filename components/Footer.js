import { Toolbar, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Toolbar
      sx={{
        background: "linear-gradient(90deg, #3498db, #8e44ad)",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <a
        href="/"
        style={{
          color: "white",
        }}
      >
        Copyright © SXC B.Sc. CSIT Batch 2021
      </a>
      <Typography color="white">V0.1.0 Beta</Typography>
    </Toolbar>
  );
};

export default Footer;
