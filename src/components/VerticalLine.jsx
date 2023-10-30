import { Box } from "@mui/material";

export default function VerticalLine({ height, color }) {
  return (
    <Box
      sx={{
        height: height,
        width: "2px",
        backgroundImage: (theme) => theme.palette.primary.mainGradient,
        borderRadius: (theme) => theme.shape.borderRadius,
        // borderLeft: `0.5px solid ${color}`,
        // borderRadius: "16px",
      }}
    ></Box>
  );
}
