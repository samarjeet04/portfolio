import {
  Button,
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import World from "../../decorations";
import {useEffect, useRef, useState} from "react";
import Header from "../Header";
import {scrollToSection} from "../Header";
import {intro, resume} from "../../data";

export default function Intro({shrink, fixContent}) {
  const theme = useTheme();
  const lessThan1300 = useMediaQuery(`(max-width: 1300px)`);
  const lessThan1390 = useMediaQuery(`(max-width: 1390px)`);
  const mouseHintRef = useRef(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    function handleHint(e) {
      if (e.pageY < window.innerHeight + 70) {
        setShowHint(true);
        mouseHintRef.current.style.left = e.pageX + "px";
        mouseHintRef.current.style.top = e.pageY + "px";
      } else {
        setShowHint(false);
      }

    }

    if (!shrink) window.addEventListener("mousemove", handleHint, false);

    return () => {
      window.removeEventListener("mousemove", handleHint, false)
    }

  }, []);

  useEffect(() => {
    if (!shrink) {
      const w = new World(
        document.getElementById("hero"),
        theme.palette.background.default,
        theme.palette.primary.main,
        theme.palette.secondary.main
      );
      w.animate();
      window.addEventListener("resize", w.onWindowResize, false);
      return () => {
        window.removeEventListener("resize", w.onWindowResize, false);
        w.dispose();
      };
    }
  }, [
    shrink,
    theme.palette.secondary.main,
    theme.palette.primary.main,
    theme.palette.background.default,
  ]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <Header shrink={lessThan1300}/>
      <Container
        className="section"
        maxWidth="lg"
        sx={{
          height: "100vh",
          textAlign: shrink ? "center" : "left",
          position: "relative",
          pl: fixContent ? (shrink ? "auto" : "50px") : "auto",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-80%)",
            zIndex: 10,
            ml: lessThan1390 ? (shrink ? "auto" : "10vw") : "auto",
            px: shrink ? (theme) => theme.spacing(2) : 0,
          }}
        >
          <Typography color="secondary" fontFamily="Fira Mono">
            Hi, my name is
          </Typography>
          <Typography
            variant="h3"
            color="text.primary"
            fontWeight="bolder"
            py={(theme) => theme.spacing(1)}
            className="gradient-text"
            sx={{zIndex: 10}}
          >
            Raunit Shrivastava.
          </Typography>
          <Typography
            variant="h3"
            color="text.primary"
            fontWeight="bolder"
            sx={{zIndex: 10}}
          >
            I build things for the web.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            py={(theme) => theme.spacing(4)}
            maxWidth={shrink ? "unset" : "500px"}
            sx={{zIndex: 10}}
          >
            {intro}
          </Typography>
          <Grid
            container
            justifyContent={shrink ? "center" : "flex-start"}
            spacing={2}
          >
            <Grid item>
              <Button
                variant="contained"
                sx={{fontSize: "16px"}}
                onClick={() => window.open(resume, "_blank")}
              >
                Resume
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                sx={{color: "white", fontSize: "16px"}}
                onClick={() => scrollToSection("about")}
              >
                Learn more <KeyboardArrowDownIcon sx={{pl: "10px"}}/>
              </Button>
            </Grid>
          </Grid>
        </Box>

      </Container>
      {!shrink && (
        <canvas
          id="hero"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            zindex: 0,
            // border: "1px solid green",
          }}
        ></canvas>
      )}
      {
        !shrink && showHint && <MouseHint reference={mouseHintRef}/>
      }
    </Box>
  );
}

function MouseHint({reference}) {
  return (
    <div ref={reference} style={{
      position: 'absolute',
      top: "50%",
      left:"50%",
      marginLeft: '32px',
      marginTop: '32px',
      zIndex: 99999,
      width: "auto"
    }}>
      <Typography
        style={{
          zIndex: 99999,
          fontFamily: 'JetBrains Mono',
          width: "auto"
        }}
        color={"rgba(255, 255, 255, 0.6)"}
        className="glow"
      >
        [ Drag to move ]
      </Typography>
    </div>
  );
}