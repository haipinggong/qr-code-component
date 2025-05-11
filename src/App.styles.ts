import type { SxProps, Theme } from "@mui/material";

type StyleProps = Record<string, SxProps<Theme>>;

export const styles: StyleProps = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
    margin: "auto",
    padding: 2,
    color: "white",
    maxWidth: theme.spacing(40),
    maxHeight: theme.spacing(60),
    backgroundColor: "white",
    borderRadius: theme.spacing(2.5),
    gap: 3,
  }),
  image: {
    width: "100%",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    textAlign: "center",
  },
  title: {
    fontWeight: 700,
    color: "#1F314F",
  },
  description: {
    color: "#68778D",
    letterSpacing: 0.2,
    lineHeight: 1.4,
  },
};

export default styles;
