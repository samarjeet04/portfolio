import { Grid, Typography } from "@mui/material";
import HorizontalLine from "./HorizontalLine";

export default function CustomHeading({ pre_text, text }) {
  return (
    <Grid container alignItems="flex-end">
      <Grid item>
        {/* <Typography variant="h5" color="white" fontFamily="Fira Code">
          {pre_text}
        </Typography> */}
      </Grid>
      <Grid item sx={{ zIndex: 10000 }}>
        <Typography
          // className="gradient-text"
          variant="h4"
          color="text.primary"
          fontWeight="bold"
          sx={{ zIndex: 10000 }}
        >
          {text}
        </Typography>
      </Grid>
      <Grid item flex={2} alignSelf="center" pl={(theme) => theme.spacing(2)}>
        <HorizontalLine />
      </Grid>
    </Grid>
  );
}
