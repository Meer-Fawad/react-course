import { useState, useEffect } from "react";
import "./Game.css";

function Game() {
  const [color, setColor] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <h2>Your Color: {color}</h2>
    </div>
  );
}

export default Game;