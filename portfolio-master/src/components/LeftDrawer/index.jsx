import { Drawer, Grid } from "@mui/material";
import VerticalLine from "../VerticalLine";
import { socials } from "../../data";

export default function LeftDrawer() {
  return (
    <Drawer
      anchor="left"
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
        {socials.map((icon, i) => (
          <Grid key={i} my={(theme) => theme.spacing(1)}>
            {icon}
          </Grid>
        ))}
        <Grid item mt={(theme) => theme.spacing(3)}>
          <VerticalLine height="90px" color="grey" />
        </Grid>
      </Grid>
    </Drawer>
  );
}
