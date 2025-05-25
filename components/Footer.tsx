import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Link from "next/link";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

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
          href="https://www.github.com/joonshakya/CSIT21"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            margin: ".4rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* add github icon */}
          <GitHubIcon
            style={{
              marginRight: "0.5rem",
              fontSize: "1.2rem",
            }}
          />
          joonshakya/CSIT21
        </Link>
      </Box>
    </Toolbar>
  );
};

export default Footer;
