import {
    Container,
    Paper,
    Typography,
    useMediaQuery,
    Box, Grid,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CustomHeading from "../CustomHeading";
import { journey } from "../../data";
import {j} from "../../images";

const TimelineCard = ({ children }) => {
  return (
    <Paper
      sx={{
        p: (theme) => theme.spacing(4),
        mt: (theme) => theme.spacing(1),
        "& .MuiTimelineContent-root": {
          flex: 5,
        },
        borderRadius: (theme) => theme.shape.borderRadius,
        zIndex: 10000,
      }}
    >
      {children}
    </Paper>
  );
};

export default function Journey({ hideGradients }) {
  const lessThan970 = useMediaQuery(`(max-width: 970px)`);
  return (
    <Box
      className="experience"
      sx={{
        width: "100%",
        bgcolor: "transparent",
        position: "relative",
        mt: "100px",
        // border: "1px solid red",
      }}
    >
      <Container
        maxWidth="md"
        className="section"
        sx={{ position: "relative", zIndex: 100 }}
      >
        <CustomHeading text="The Journey" pre_text="02." />
        <Timeline
          position={lessThan970 ? "right" : "alternate"}
          sx={{
            ml: lessThan970 && "-90%",
            mt: (theme) => theme.spacing(3),
            zIndex: 100,
          }}
        >
          {journey.map(({ icon, pre_head, title, duration, body, techstack, company }, i, arr) => (
            <TimelineItem key={i}>
              <TimelineSeparator sx={{ zIndex: 10000 }}>
                <TimelineDot
                  sx={{
                    bgcolor: icon ? "rgb(0,0,0)" : "rgba(255, 255, 255, 0.4)",
                    zIndex: 10000,
                  }}
                >
                  {icon}
                </TimelineDot>
                <TimelineConnector
                  sx={{ bgcolor: "rgba(255, 255, 255, 0.1)" }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  color="secondary"
                  variant="caption"
                  fontFamily="Fira Code"
                >
                  {duration}
                </Typography>
                {i !== arr.length - 1 && (
                  <TimelineCard>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{ zIndex: 100, cursor: "pointer"}}
                      onClick={() => window.open(company, "_blank")}
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="secondary"
                      variant="caption"
                      fontFamily="Fira Code"
                    >
                      {pre_head}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      mt={(theme) => theme.spacing(2)}
                      sx={{ zIndex: 10000 }}
                    >
                      {body}
                    </Typography>
                      {
                          !!techstack && (
                              <>
                                  <br/>
                              <Grid container justifyContent="flex-start" columnSpacing={2}>
                                  {techstack.map((item, i) => (
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
                              </>
                          )
                      }
                  </TimelineCard>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
      {!hideGradients && (
        <img
          src={j}
          alt="kmwd"
          width="100%"
          style={{
            position: "absolute",
            zIndex: 0,
            top: 0,
          }}
        />
      )}
    </Box>
  );
}
