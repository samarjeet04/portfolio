import CustomHeading from "../CustomHeading";
import {
  Container,
  Grid,
  Typography,
  Chip,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
import {abt} from "../../images";
// import graph from "../../images/graph.png";
// import graveyard from "../../images/graveyard.png";
// import graph from "https://res.cloudinary.com/daa4wqa2h/image/upload/v1648995060/graph_u13auj.png";
// import graveyard from "https://res.cloudinary.com/daa4wqa2h/image/upload/v1648995061/graveyard_blo9ob.png";
import { useNavigate } from "react-router-dom";
import {simulations} from "../../data";

export default function Cards({ shrink, hideGradients }) {
  const navigate_to = useNavigate();

  function _redirect(link) {
    if (link.includes("http")) window.open(link, "_blank");
    else navigate_to(link);
  }

  return (
    <Grid
      container
      className="about"
      justifyContent="center"
      sx={{
        width: "100%",
        bgcolor: "transparent",
        position: "relative",
      }}
    >
      <Grid item xs={shrink ? 12 : 10}>
        <Container
          className="section"
          maxWidth="xl"
          sx={{
            mt: 0,
            pt: (theme) => theme.spacing(4),
            zIndex: 100,
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <CustomHeading text="Simulations" pre_text="01." />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            mt={(theme) => theme.spacing(2)}
            spacing={2}
            columnSpacing={3}
          >
            {simulations.map(({ title, desc, route, img }, i) => (
              <Grid item xs={12} md={6} lg={4} key={i} sx={{ zIndex: 10 }}>
                <Card
                  sx={(theme) => ({
                    borderRadius: theme.shape.borderRadius,
                  })}
                >
                  <CardActionArea
                    sx={{ p: (theme) => theme.spacing(2) }}
                    onClick={() => _redirect(route)}
                  >
                    <CardMedia
                      image={img}
                      component="img"
                      sx={(theme) => ({
                        borderRadius: theme.shape.borderRadius,
                      })}
                    />
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      mt={(theme) => theme.spacing(2)}
                      mb={(theme) => theme.spacing(1)}
                    >
                      {title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {desc}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>

      {!hideGradients && (
        <img
          src={abt}
          alt="kmwd"
          width="100%"
          style={{ position: "absolute", zIndex: 0, top: "10%" }}
        />
      )}
    </Grid>
  );
}
