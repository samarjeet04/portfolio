import { Box } from "@mui/material";

export default function HorizontalLine({ flipped }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "2px",
        backgroundImage: flipped
          ? (theme) => theme.palette.primary.reverseGradient
          : (theme) => theme.palette.primary.mainGradient,
        borderRadius: (theme) => theme.shape.borderRadius,
        // borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    ></Box>
  );
}
