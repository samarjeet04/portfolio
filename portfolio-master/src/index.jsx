import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ThemeProvider} from "@mui/material/styles";
import {darkTheme} from "./themes";
import {BrowserRouter} from "react-router-dom";
import "@fontsource/poppins";

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root"),
);
