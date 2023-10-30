import { useEffect, useRef } from "react";
import { renderHauntedHouse, dispose } from "./scenes/hauntedHouse";

export default function Graveyard() {
  const canvasRef = useRef(null);

  useEffect(() => {
    renderHauntedHouse(canvasRef.current);
    // document.getElementsByClassName("tp-dfwv")[0].style.display = "block";

    return () => {
      // document.getElementsByClassName("tp-dfwv")[0].style.display = "none";
      dispose();
    };
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} id="houseCanvas"></canvas>
    </div>
  );
}
