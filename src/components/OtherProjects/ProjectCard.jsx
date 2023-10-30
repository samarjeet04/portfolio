import { Grid, IconButton, Paper, Typography } from "@mui/material";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

export default function ProjectCard({ name, github, link, skills, desc }) {
  return (
    <Paper
      sx={{
        p: (theme) => theme.spacing(4),
        borderRadius: (theme) => theme.shape.borderRadius,
        minHeight: "227.016px",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        mb={(theme) => theme.spacing(2)}
      >
        <Grid item flex={2}>
          <FolderOpenRoundedIcon sx={{ width: "50px", height: "50px" }} />
        </Grid>
        {github && (
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
        {link && (
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
      <Typography
        variant="h6"
        fontWeight="bold"
        color="text.primary"
        mb={(theme) => theme.spacing(2)}
      >
        {name}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {desc}
      </Typography>
      <Grid container columnSpacing={2} mt={(theme) => theme.spacing(2)}>
        {skills.map((item, i) => (
          <Grid item key={i}>
            <Typography
              variant="body2"
              color="secondary"
              fontFamily="Fira Code"
            >
              {item}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
