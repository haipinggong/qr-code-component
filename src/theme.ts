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
  },
});
export default theme;
