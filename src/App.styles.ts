import type { SxProps, Theme } from "@mui/material";

type StyleProps = Record<string, SxProps<Theme>>;

export const styles: StyleProps = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  content: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2, 2, 5, 2),
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.spacing(2.5),
    gap: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(2),
    },
  }),
  image: (theme: Theme) => ({
    maxWidth: "18rem",
    width: "100%",
    aspectRatio: 1,
    borderRadius: theme.spacing(1.25),
  }),
  textContainer: {
    maxWidth: "18rem",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    paddingInline: 2,
    textAlign: "center",
  },
  description: (theme: Theme) => ({
    color: theme.palette.slate.main,
  }),
};

export default styles;
