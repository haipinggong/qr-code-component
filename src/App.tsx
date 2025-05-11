import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import qrCodeImage from "./assets/image-qr-code.png";
import styles from "./App.styles";

function App() {
  return (
    <>
      <Box sx={styles.container}>
        <Box component="img" src={qrCodeImage} sx={styles.image}></Box>
        <Box sx={styles.text}>
          <Typography variant="h5" component="h1" sx={styles.title}>
            Improve your front-end skills by building projects
          </Typography>
          <Typography variant="body1" component="p" sx={styles.description}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
