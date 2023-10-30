import {
  Button,
  Container,
  Stack,
  Typography,
  Box,
  Grid,
  useMediaQuery,
} from "@mui/material";

export default function GetInTouch({ shrink }) {
  const lessThan425 = useMediaQuery(`(max-width: 425px)`);
  return (
    <Box
      className="contact"
      sx={{
        width: "100%",
      }}
    >
      <Container className="section" maxWidth="lg">
        <Stack justifyContent="center" alignItems="center" rowGap={2}>
          <Typography variant="body1" color="primary" fontFamily="Fira Code">
            What's Next ?
          </Typography>
          <Typography variant="h2" color="text.primary" fontWeight="bold">
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth="500px"
            textAlign="center"
          >
            I’m always looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I’ll try my best
            to get back to you!
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: (theme) => theme.spacing(2) }}
            onClick={() => window.open("mailto:raunits29@gmail.com", "_blank")}
          >
            Say Hello
          </Button>
        </Stack>
      </Container>
      <Grid
        container
        justifyContent={lessThan425 ? "center" : "flex-end"}
        mt={(theme) => theme.spacing(lessThan425 ? 5 : 10)}
        mb={(theme) => theme.spacing(10)}
      >
        <Grid item mr={shrink ? 0 : "70px"}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Typography
              className="gradient-text"
              variant="h4"
              color="white"
              px="10px"
              pt="20px"
            >
              {"<"}
            </Typography>
            <Typography
              className="gradient-text"
              variant={lessThan425 ? "h4" : "h3"}
              fontFamily="Agustina"
              pl="10px"
              pt="20px"
            >
              Raunit Shrivastava
            </Typography>
            <Typography
              className="gradient-text"
              variant="h4"
              color="white"
              px="10px"
              pt="20px"
            >
              {"/>"}
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      {/* <img
        src={bg}
        alt="kmwd"
        width="100%"
        style={{
          position: "absolute",
          zIndex: 0,
          top: 0,
        }}
      /> */}
    </Box>
  );
}
