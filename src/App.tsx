import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import qrCodeImage from "./assets/image-qr-code.png";
import styles from "./App.styles";

function App() {
  return (
    <>
      <Box sx={styles.wrapper}>
        <Box sx={styles.content}>
          <Box
            component="img"
            src={qrCodeImage}
            alt="QR code image"
            sx={styles.image}
          ></Box>
          <Box sx={styles.textContainer}>
            <Typography variant="h1">
              Improve your front-end skills by building projects
            </Typography>
            <Typography sx={styles.description}>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
