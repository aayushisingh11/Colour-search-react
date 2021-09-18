import { useState } from "react";
import "./App.css";

function App() {
  const colors = [
    "red",
    "green",
    "red",
    "blue",
    "purple",
    "yellow",
    "brown",
    "purple",
    "black",
  ];
  const [term, setTerm] = useState("");

  return (
    <div className="App">
      <h1>Colour Search</h1>
      <input
        type="text"
        placeholder="Search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <h1>{term}</h1>
      <div className="colors">
        {colors
          .filter((color) => color.includes(term))
          .map((color, index) => {
            console.log(color);
            return (
              <div
                className="colorbox"
                style={{ backgroundColor: color }}
                key={index}
              ></div>
            );
          })}
      </div>
    </div>
  );
}

export default App;