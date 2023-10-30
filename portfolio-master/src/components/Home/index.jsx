import { Grid, useMediaQuery, Box } from "@mui/material";
import About from "../About";
import Certifications from "../Certifications";
import FeaturedProjects from "../FeaturedProjects";
import Footer from "../Footer";
import GetInTouch from "../GetInTouch";
import Intro from "../Intro";
import Journey from "../Journey";
import LeftDrawer from "../LeftDrawer";
import OtherProjects from "../OtherProjects";
import RightDrawer from "../RightDrawer";

export default function Home() {
  const lessThan1000 = useMediaQuery(`(max-width: 1000px)`);
  const lessThan780 = useMediaQuery(`(max-width: 780px)`);
  const lessThan750 = useMediaQuery(`(max-width: 750px)`);

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
          <About shrink={lessThan1000} hideGradients={lessThan750} />
          <Journey hideGradients={lessThan750} />
          <FeaturedProjects shrink={lessThan1000} shrinked={lessThan750} />
          <OtherProjects shrink={lessThan1000} />
          <Certifications shrink={lessThan780} shrinked={lessThan1000} />
          <GetInTouch shrink={lessThan1000} />
          <Footer shrink={lessThan1000} />
        </Grid>
      </Grid>
    </Box>
  );
}
