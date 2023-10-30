import { Typography } from "@mui/material";

export default function VerticalText({ text, textProps }) {
  return (
    <Typography
      color="text.primary"
      sx={{
        writingMode: "vertical-rl",
        fontFamily: "Fira Mono",
        fontSize: "13px",
        letterSpacing: "2px",
        ...textProps,
      }}
    >
      {text}
    </Typography>
  );
}
