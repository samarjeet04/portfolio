import {lazy, Suspense, useEffect} from "react";
import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {bg} from "./images";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";

const Home = lazy(() => import("./components/Home"));
const Simulations = lazy(() => import("./components/Simulations"));
const Galaxy = lazy(() => import("./components/Simulations/GalaxySim"));
const Graveyard = lazy(() =>
  import("./components/Simulations/HauntedHouseSim")
);
const GraphSim = lazy(() => import("./components/Simulations/GraphSim"));

function App() {

  // useEffect(() => {
  //   document.onkeydown = function (e) {
  //     if (e.keyCode === 123) {
  //       return false;
  //     }
  //     if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
  //       return false;
  //     }
  //     if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
  //       return false;
  //     }
  //     if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
  //       return false;
  //     }
  //   };
  // }, []);

  return (
    <Box
      sx={{
        bgcolor: "black",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        overflowX: "clip"
      }}
    >
      <Suspense fallback={<LoadingScreen/>}>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/simulations" element={<Simulations/>}/>
          <Route exact path="/simulations/3dgraph" element={<GraphSim/>}/>
          <Route exact path="/simulations/graveyard" element={<Graveyard/>}/>
          <Route exact path="/simulations/galaxy" element={<Galaxy/>}/>
        </Routes>
      </Suspense>
    </Box>
  );
}

export default App;
