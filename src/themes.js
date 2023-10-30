import { createTheme, responsiveFontSizes } from "@mui/material/styles";
// import bg from "./images/wazirx.png";

export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#d31297",
        mainGradient:
          "linear-gradient(51deg,rgb(81, 145, 213) 0%,rgb(211, 18, 151) 100%)",
        reverseGradient:
          "linear-gradient(51deg,rgb(211, 18, 151) 0%,rgb(81, 145, 213) 100%)",
      },
      info: {
        main: "#ffffff",
      },
      secondary: {
        main: "#5191d5",
      },
      background: {
        default: "#09080d",
      },
    },
    components: {
      // MuiContainer: {
      //   styleOverrides: {
      //     root: {
      //       backgroundImage: `url(${bg})`,
      //     },
      //   },
      // },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: `"Poppins", sans-serif`,
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          contained: {
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, rgb(81, 145, 213), rgb(211, 18, 151))",
            boxShadow: "rgb(0 0 0) 2px 1000px 1px inset",
            border: "2px solid transparent",
            borderRadius: "9999px",
            textTransform: "none",
            backgroundClip: "border-box",
            backgroundOrigin: "border-box",
            fontFamily: `"Poppins", sans-serif`,
            paddingLeft: "32px",
            paddingRight: "32px",
            letterSpacing: "normal",
            lineHeight: "25px",
            "&:hover": {
              boxShadow: "rgb(0 0 0) 2px 1000px 1px inset",
            },
          },
          text: {
            textTransform: "capitalize",
            fontFamily: `"Poppins", sans-serif`,
            fontWeight: "normal",
          },
          outlined: {
            textTransform: "capitalize",
            fontFamily: "Fira Mono",
            fontWeight: "normal",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, rgb(81, 145, 213), rgb(211, 18, 151))",
            boxShadow: "rgb(0 0 0) 2px 1000px 1px inset",
            border: "2px solid transparent",
            backgroundClip: "border-box",
            backgroundOrigin: "border-box",
            fontFamily: "Inter",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingTop: "8px",
            paddingBottom: "8px",
            letterSpacing: "normal",
            lineHeight: "25px",
            fontSize: "16px",
            // "&:hover": {
            //   boxShadow: "rgb(0 0 0) 2px 1000px 1px inset",
            // },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, rgb(81, 145, 213), rgb(211, 18, 151))",
            boxShadow: "rgba(0, 0, 0, 0.9) 2px 1000px 1px inset",
            border: "2px solid transparent",
            backgroundClip: "border-box",
            backgroundOrigin: "border-box",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            border: "none",
            backgroundColor: "transparent",
            boxShadow: "none",
            backgroundImage: "none",
          },
        },
      },
    },
  })
);
