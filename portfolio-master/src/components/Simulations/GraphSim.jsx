import { useEffect, useRef } from "react";
import { renderScene, dispose } from "./scenes/graph";

export default function GraphSim() {
  const canvasRef = useRef(null);

  useEffect(() => {
    renderScene(canvasRef.current);
    // document.getElementsByClassName("tp-dfwv")[0].style.display = "block";

    return () => {
      // document.getElementsByClassName("tp-dfwv")[0].style.display = "none";
      dispose();
    };
  }, []);

  return (
    <div className="App">
      <canvas
        ref={canvasRef}
        id="graphCanvas"
        style={{ backgroundColor: "grey" }}
      ></canvas>
    </div>
  );
}
