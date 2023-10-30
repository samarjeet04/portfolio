import Headroom from "react-headroom";
import {
  AppBar,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {useEffect, useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {scroller} from "react-scroll";
import {resume} from "../../data";
import {useNavigate} from "react-router-dom";

export function scrollToSection(elementClass) {
  scroller.scrollTo(elementClass, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}

export default function Header({shrink}) {
  const [showShadow, setShowShadow] = useState(false);
  const [opaque, setOpaque] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const navigate_to = useNavigate();

  const handleScroll = () => {
    window.scrollY > window.innerHeight
      ? setShowShadow(true)
      : setShowShadow(false);
    window.scrollY > window.innerHeight ? setOpaque(true) : setOpaque(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Headroom style={{zIndex: 999999}}>
      <AppBar
        position="sticky"
        sx={{
          background: "transparent",
          backdropFilter: opaque ? "blur(50px)" : "none",
          p: (theme) => theme.spacing(2),
          backgroundClip: "border-box",
          backgroundOrigin: "border-box",
          backgroundImage: opaque
            ? "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, rgb(81, 145, 213), rgb(211, 18, 151))"
            : "transparent",
          boxShadow: opaque ? "rgb(0 0 0) 2px 1000px 1px inset" : "none",
          border: "none",
          borderBottom: opaque && "5px solid transparent",
          // opacity: opacity,
          transition: "height 2s ease-in-out",
        }}
      >
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid
              item
              onClick={() => navigate_to("/")}
              sx={{cursor: "pointer"}}
            >
              <Typography
                variant="h4"
                color="white"
                fontFamily="Agustina"
                mt={(theme) => theme.spacing(2)}
              >
                Raunit Shrivastava
              </Typography>
            </Grid>
            <Grid item>
              {shrink ? (
                <IconButton onClick={() => setShowDrawer(!showDrawer)}>
                  <MenuIcon/>
                </IconButton>
              ) : (
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width="600px"
                >
                  {[
                    "About",
                    "Experience",
                    "Work",
                    "Simulations",
                    "Contact",
                  ].map((nav, i) => (
                    <Button
                      key={i}
                      variant="text"
                      color="info"
                      onClick={() => {
                        if (i === 3) {
                          navigate_to("/simulations");
                        } else {
                          scrollToSection(nav.toLowerCase());
                        }
                      }}
                    >
                      {nav}
                    </Button>
                  ))}
                  <Button
                    variant="contained"
                    onClick={() => window.open(resume, "_blank")}
                  >
                    Resume
                  </Button>
                </Stack>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        anchor="bottom"
        sx={{zIndex: 2147483}}
        PaperProps={{
          sx: {
            zIndex: 2147483,
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            bgcolor: "black",
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, rgb(81, 145, 213), rgb(211, 18, 151))",
            boxShadow: "rgb(0 0 0) 2px 1000px 1px inset",
            borderTop: "2px solid transparent",
          },
        }}
      >
        <List sx={{zIndex: 2147483}}>
          {["About", "Experience", "Work", "Simulations", "Contact"].map(
            (item, i) => (
              <ListItem
                key={i}
                button
                sx={{zIndex: 2147483}}
                onClick={() => {
                  if (i === 3) {
                    navigate_to("/simulations");
                  } else {
                    scrollToSection(item.toLowerCase());
                    setShowDrawer(false);
                  }
                }}
              >
                <ListItemText sx={{zIndex: 2147483}}>{item}</ListItemText>
              </ListItem>
            ),
          )}
          <ListItem>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => window.open(resume, "_blank")}
            >
              Resume
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Headroom>
  );
}