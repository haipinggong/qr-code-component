import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "#1F314F",
      secondary: "#68778D",
    },
    background: {
      default: "#D5E1EF",
    },
  },
  typography: {
    fontFamily: "Outfit, sans-serif",
    h5: { lineHeight: 1.2 },
    body2: {
      color: "#68778D",
      lineHeight: 1.4,
      letterSpacing: "0.2px",
      fontSize: "0.9375rem",
    },
  },
});
export default theme;
