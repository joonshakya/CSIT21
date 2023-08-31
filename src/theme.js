import { Roboto } from "@next/font/google";

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import localFont from "@next/font/local";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const productSans = localFont({
  src: [
    {
      path: "../public/static/fonts/Product Sans/ProductSans.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/static/fonts/Product Sans/ProductSans-Bold.woff",
      weight: "700",
      style: "bold",
    },
  ],
});

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#6671c6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#e8ecf4",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: `'Product Sans', ${productSans.style.fontFamily}, 'Roboto', sans-serif`,
  },
});

export default theme;
