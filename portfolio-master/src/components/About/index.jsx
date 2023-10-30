import CustomHeading from "../CustomHeading";
import {Container, Grid, Typography, Chip} from "@mui/material";
import {abt} from "../../images";
import {about, skills} from "../../data";

export default function About({shrink, hideGradients}) {
  return (
    <Grid
      container
      className="about"
      justifyContent="center"
      sx={{
        width: "100%",
        bgcolor: "transparent",
        position: "relative",
        minHeight: "930px",
        // border: "1px solid violet",
      }}
    >
      <Grid item xs={shrink ? 12 : 10}>
        <Container
          className="section"
          maxWidth="md"
          sx={{
            // mb: (theme) => theme.spacing(40),
            mt: 0,
            pt: (theme) => theme.spacing(20),
            zIndex: 100,
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <CustomHeading text="About Me" pre_text="01."/>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            mt={(theme) => theme.spacing(2)}
            spacing={2}
            columnSpacing={3}
          >
            <Grid item xs={12} sm={6} textAlign="justify" sx={{zIndex: 10}}>
              <Typography color="text.secondary" variant="body1">
                {about}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{zIndex: 10}}>
              {/* <img
                src={placeholder}
                alt="raunit"
                style={{
                  borderRadius: "16px",
                  width: "100%",
                  height: "100%",
                }}
              /> */}
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                rowSpacing={1}
              >
                {skills.map((item, i) => (
                  <Grid key={i} item xs="auto">
                    <Chip label={item}/>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <div className="ball-pink"></div>
      <div className="ball-pink" style={{left: "-500px"}}></div>
      {/*{!hideGradients && (*/}
      {/*  <img*/}
      {/*    src={abt}*/}
      {/*    alt="kmwd"*/}
      {/*    width="100%"*/}
      {/*    style={{ position: "absolute", zIndex: 0, top: "10%" }}*/}
      {/*  />*/}
      {/*)}*/}
    </Grid>
  );
}
