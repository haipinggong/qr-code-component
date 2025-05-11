import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // Example primary color
    },
    secondary: {
      main: "#000000", // Example secondary color
    },
    text: {
      primary: "#1F314F", // Example text color
      secondary: "#68778D", // Example secondary text color
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
