import { useEffect, useRef } from "react";
import { dispose, renderGalaxy } from "./scenes/galaxy";

export default function Galaxy() {
  const canvasRef = useRef(null);

  useEffect(() => {
    renderGalaxy(canvasRef.current);
    // document.getElementsByClassName("tp-dfwv")[0].style.display = "block";

    return () => {
      // document.getElementsByClassName("tp-dfwv")[0].style.display = "none";
      dispose();
    };
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} id="galaxyCanvas"></canvas>
    </div>
  );
}
