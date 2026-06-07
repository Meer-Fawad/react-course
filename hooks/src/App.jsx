import { useState } from "react";
import Prop from "./components/Prop";
import { useEffect } from "react";
import Game from "./components/Game";
import "./App.css";
import Hooks_useeffect_ref_callback from "./components/Hooks_useeffect_ref_callback";
function App() {
  const [color, setColor] = useState("pink");
  const changeColor = () => {
    setColor("purple");
  };

  const [colors, setColors] = useState([
    "red",
    "blue",
    "green",
    "yellow",
    "black",
    "white",
  ]);
  const [currentColor, setCurrentColor] = useState("");
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount(count + 1);
  };
  const subtractValue = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Count cannot be negative");
      setCount(0);
    }
  };
const [currentC, setCurrentC] = useState("gray");

  useEffect(() => {
    document.body.style.backgroundColor = currentC;
  }, [currentC]);

  return (
    <>
     <Game />
      <h1 style={{ color: color  }} onMouseEnter={changeColor }>
        
        Welcome to Vite / on click color will change
      </h1 >
      <h2>counter value = {count}</h2>
      <div className="button-container">
        
     <button onClick={() => setCurrentC("blue")}>
        Change to Blue
      </button>
      <button onClick={() => setCurrentC("green")}>
        Change to Green
      </button>

      <button onClick={() => setCurrentC("red")}>
        Change to Red
      </button> 
   
        <button onClick={addValue} > Increment</button> 
        <button onClick={subtractValue}>Decrement</button>
      </div>
      <div style={{ display: "flex", gap: "10px"  ,border: "1px solid black", padding: "10px", marginTop: "20px" }}>
        {colors.map((color, index) => (
          <div
            key={index}
            onMouseEnter={() => setCurrentColor(color)}
            style={{ background: color, width: "100px", textAlign: "center", borderRadius: "10px",boxShadow: "10px 20px 8px rgba(11, 11, 11, 0.77)", height: "100px" , border: currentColor === color ? "3px solid black" : "none", cursor: "pointer" }}
          > {color}</div>
        ))}

        <div
          style={{ background: currentColor, width: "200px" ,borderRadius: "5px 50px ",boxShadow: "10px 20px 8px rgba(11, 14, 12, 0.74)",textAlign: "center", height: "200px", border: currentColor ? "3px solid black" : "none" }}
        >current color: {currentColor}</div>
      </div>
      <Prop title="This is a prop title" description="This is a prop description" />
      <Prop title="Another prop title" description="Another prop description" />
      <Prop title="fawad" description=" description" />
    <Hooks_useeffect_ref_callback />
    </>
  );
}
export default App;
