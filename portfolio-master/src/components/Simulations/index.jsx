import { Grid, useMediaQuery, Box } from "@mui/material";
import LeftDrawer from "../LeftDrawer";
import RightDrawer from "../RightDrawer";
import Cards from "./Cards";
import Intro from "./Intro";

export default function Simulations() {
  const lessThan1000 = useMediaQuery(`(max-width: 1000px)`);
  const lessThan780 = useMediaQuery(`(max-width: 780px)`);

  return (
    <Box>
      {!lessThan1000 && (
        <>
          <LeftDrawer />
          <RightDrawer />
        </>
      )}
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Intro shrink={lessThan780} fixContent={lessThan1000} />
          <Cards />
        </Grid>
      </Grid>
    </Box>
  );
}
