import { CircularProgress, Box } from "@mui/material";

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
