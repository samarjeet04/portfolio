import { Container, Grid, Typography } from "@mui/material";
import { socials } from "../../data";

export default function Footer({ shrink }) {
  return (
    <Container className="section">
      {shrink && (
        <Grid
          container
          justifyContent="center"
          alignItems="baseline"
          columnGap={2}
          // mb={(theme) => theme.spacing(2)}
        >
          {socials.map((icon, i) => (
            <Grid item key={i}>
              {icon}
            </Grid>
          ))}
        </Grid>
      )}
      <Typography
        variant="body1"
        color="text.secondary"
        fontFamily="Fira Code"
        textAlign="center"
        mb={(theme) => theme.spacing(1)}
        // mt={(theme) => theme.spacing(shrink ? 2 : 30)}
        fontSize="14px"
      >
        Made by
        <Typography
          component="span"
          variant="body1"
          color="primary"
          fontFamily="Fira Code"
          textAlign="center"
          fontSize="14px"
        >
          {" "}
          Raunit Shrivastava
        </Typography>
      </Typography>

      {/* <Typography
        variant="body2"
        color="text.secondary"
        fontFamily="Fira Code"
        textAlign="center"
        mb={(theme) => theme.spacing(4)}
        fontSize="10px"
      >
        Copyright 2022
      </Typography> */}
    </Container>
  );
}
