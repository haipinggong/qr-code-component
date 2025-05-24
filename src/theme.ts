import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    slate: Palette["primary"];
  }

  interface PaletteOptions {
    slate?: PaletteOptions["primary"];
  }
}

let theme = createTheme({
  palette: {
    slate: {
      main: "#68778D",
      light: "#D5E1EF",
      dark: "#1F314F",
    },
  },
  typography: {
    fontFamily: "Outfit, sans-serif",
  },
});

theme = createTheme(theme, {
  palette: {
    text: {
      primary: theme.palette.slate.main,
    },
    background: {
      default: theme.palette.slate.light,
    },
  },
  typography: {
    h1: {
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.2,
      letterSpacing: 0,
      fontSize: "1.375rem",
    },
    body1: {
      lineHeight: 1.4,
      letterSpacing: "0.2px",
      fontSize: "0.9375rem",
    },
  },
});

export default theme;
