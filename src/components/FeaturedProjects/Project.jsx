/* eslint-disable react/jsx-no-target-blank */
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import {placeholder} from "../../images";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

function Shrinked({ title, summary, stack, github, link }) {
  return (
    <Paper
      sx={{
        p: (theme) => theme.spacing(4),
        borderRadius: (theme) => theme.shape.borderRadius,
      }}
    >
      <Stack rowGap={1}>
        <Typography color="primary" variant="body2" fontFamily="Fira Code">
          Featured Project
        </Typography>
        <Typography
          color="text.primary"
          variant="h3"
          fontWeight="bold"
          mb={(theme) => theme.spacing(2)}
          sx={{ cursor: "pointer" }}
          onClick={() => window.open(link, "_blank")}
        >
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb="10px">
          {summary}
        </Typography>
        <Grid container justifyContent="flex-start" spacing={3}>
          {stack.map((item, i) => (
            <Grid item key={i}>
              <Typography
                variant="caption"
                color="secondary"
                fontFamily="Fira Code"
              >
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Grid container justifyContent="flex-start" spacing={3}>
          <Grid item>
            <IconButton
              onClick={() => {
                window.open(github, "_blank");
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => {
                window.open(link, "_blank");
              }}
            >
              <OpenInNewRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
}

export default function Project({
  title,
  summary,
  stack,
  github,
  link,
  flipped,
  image,
  shrinked,
}) {
  const lessThan1200 = useMediaQuery(`(max-width: 1200px)`);

  return (
    <>
      {shrinked ? (
        <Shrinked
          title={title}
          summary={summary}
          stack={stack}
          github={github}
          link={link}
        />
      ) : (
        <Grid
          container
          mt={(theme) => theme.spacing(5)}
          mb={(theme) => theme.spacing(10)}
          sx={{ position: "relative" }}
          justifyContent={flipped ? "flex-end" : "flex-start"}
        >
          <Grid item xs={7}>
            <Card sx={{ border: "none" }}>
              <CardActionArea>
                <a href={!!link ? link : github} target="_blank">
                  <CardMedia
                    component="img"
                    image={image ? image : placeholder}
                  />
                </a>
              </CardActionArea>
            </Card>
          </Grid>
          <Box
            sx={{
              position: "absolute",
              right: !flipped && 0,
              left: flipped && 0,
              top: "50%",
              transform: "translateY(-50%)",
              margin: "auto",
              textAlign: flipped ? "left" : "right",
              maxWidth: lessThan1200 ? "70%" : "48%",
            }}
          >
            <Stack rowGap={1}>
              <Typography
                color="primary"
                variant="caption"
                fontFamily="Fira Code"
              >
                Featured Project
              </Typography>
              <Typography
                color="text.primary"
                variant="h5"
                fontWeight="bold"
                sx={{ cursor: "pointer" }}
                onClick={() => window.open(!!link ? link : github, "_blank")}
              >
                {title}
              </Typography>
              <Paper
                sx={{
                  p: (theme) => theme.spacing(2),
                  my: (theme) => theme.spacing(2),
                  borderRadius: (theme) => theme.shape.borderRadius,
                }}
              >
                <Typography variant="body1" color="text.secondary" mb="10px">
                  {summary}
                </Typography>
                <Grid
                  container
                  justifyContent={flipped ? "flex-start" : "flex-end"}
                  spacing={3}
                >
                  {stack.map((item, i) => (
                    <Grid item key={i}>
                      <Typography
                        variant="caption"
                        color="secondary"
                        fontFamily="Fira Code"
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Paper>

              <Grid
                container
                justifyContent={flipped ? "flex-start" : "flex-end"}
                spacing={3}
              >
                {!!github && (
                  <Grid item>
                    <IconButton
                      onClick={() => {
                        window.open(github, "_blank");
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Grid>
                )}
                {!!link && (
                    <Grid item>
                      <IconButton
                          onClick={() => {
                            window.open(link, "_blank");
                          }}
                      >
                        <OpenInNewRoundedIcon />
                      </IconButton>
                    </Grid>
                )}
              </Grid>
            </Stack>
          </Box>
        </Grid>
      )}
    </>
  );
}
