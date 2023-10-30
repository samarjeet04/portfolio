import { Container, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { other_projects } from "../../data";
import CustomHeading from "../CustomHeading";

export default function OtherProjects({ shrink }) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={shrink ? 12 : 10}>
        <Container
          className="section"
          sx={{
            my: (theme) => theme.spacing(20),
          }}
        >
          <Grid container mb={(theme) => theme.spacing(4)}>
            <Grid item xs={12}>
              <CustomHeading pre_text="03." text="Other Notable projects" />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            {other_projects.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i} sx={{ zIndex: 10 }}>
                <ProjectCard
                  key={i}
                  name={item.name}
                  skills={item.skills}
                  desc={item.desc}
                  github={item.github}
                  link={item.link}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
