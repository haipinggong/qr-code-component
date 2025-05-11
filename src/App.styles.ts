import type { SxProps, Theme } from "@mui/material";

type StyleProps = Record<string, SxProps<Theme>>;

export const styles: StyleProps = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
    padding: 2,
    maxWidth: theme.spacing(40),
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(2.5),
    gap: 3,
  }),
  image: (theme: Theme) => ({
    width: "100%",
    borderRadius: theme.spacing(1.25),
  }),
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    paddingInline: 2,
    textAlign: "center",
  },
  title: (theme: Theme) => ({
    fontWeight: theme.typography.fontWeightBold,
  }),
};

export default styles;
