import { Drawer, Grid } from "@mui/material";
import VerticalLine from "../VerticalLine";
import VerticalText from "../VerticalText";

export default function RightDrawer() {
  return (
    <Drawer
      anchor="right"
      variant="permanent"
      PaperProps={{
        sx: {
          zIndex: (theme) => theme.zIndex.appBar - 1,
        },
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="flex-end"
        height="100%"
        px={(theme) => theme.spacing(4)}
        pt={(theme) => theme.spacing(3)}
      >
        <Grid item>
          <VerticalText text="raunits29@gmail.com" />
        </Grid>
        <Grid item mt={(theme) => theme.spacing(3)}>
          <VerticalLine height="90px" color="grey" />
        </Grid>
      </Grid>
    </Drawer>
  );
}
