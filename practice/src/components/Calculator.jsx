import { useState } from "react";

export default function Calculator() {
  const [num, setNum] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");
  const expressionHandler = (operator) => {
    setExpression(operator);
    const n1 = parseFloat(num);
    const n2 = parseFloat(num2);
    let res;
    switch (operator) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n1 / n2;
        break;
      default:
        res = "Invalid operator";
    }
    setResult(res);
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <input
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={() => expressionHandler("+")}>Add</button>
      <button onClick={() => expressionHandler("-")}>Subtract</button>
      <button onClick={() => expressionHandler("*")}>Multiply</button>
      <button onClick={() => expressionHandler("/")}>Divide</button>
      <h3>Result: {result}</h3>
    </div>
  );
}
