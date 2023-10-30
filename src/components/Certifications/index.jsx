import React from "react";
import CustomHeading from "../CustomHeading";
import {Deloitte} from "../../images";
import {JPMC} from "../../images";
import {Reactjs} from "../../images";
import {Postman} from "../../images";
import {Goldman} from "../../images";
import {
  Card,
  CardMedia,
  Container,
  Grid,
  Box,
  CardActionArea,
} from "@mui/material";

export default function Certifications({ shrink, shrinked }) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={shrinked ? 12 : 10}>
        <Container
          className="section"
          sx={{ mb: (theme) => theme.spacing(40) }}
        >
          <CustomHeading text="Wall of Fame" pre_text="04." />
          <Grid container spacing={2} mt={(theme) => theme.spacing(2)}>
            {[
              [
                Goldman,
                "https://insidesherpa.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_Azv8bfeKMXzmtxHZc_1642763528493_completion_certificate.pdf",
              ],
              [
                Deloitte,
                "https://insidesherpa.s3.amazonaws.com/completion-certificates/Deloitte/YPWCiGNTkr6QxcpEu_Deloitte_Azv8bfeKMXzmtxHZc_1639847991959_completion_certificate.pdf",
              ],
              [
                JPMC,
                "https://insidesherpa.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_Azv8bfeKMXzmtxHZc_1639911264424_completion_certificate.pdf",
              ],
              [Reactjs, "https://www.hackerrank.com/certificates/dca3aaa1a088"],
              [
                Postman,
                "https://api.badgr.io/public/assertions/yq2hriB8TCGYhMFpXuJBNQ?identity__email=raunits29%40gmail.com",
              ],
            ].map((cert, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Card
                  sx={{
                    position: "relative",
                    borderRadius: (theme) => theme.shape.borderRadius,
                    border: "none",
                  }}
                >
                  <CardActionArea
                    onClick={() => window.open(cert[1], "_blank")}
                  >
                    <CardMedia component="img" image={cert[0]} />
                    {/* <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.65)",
                    transition: "0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                ></Box> */}
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
