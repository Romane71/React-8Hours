import "./App.css";
// import { User } from "./User";
import { useState } from "react";

function App() {
  const [textColor, setTextColor] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "red" : "black");
        }}
      >
        Show/Hide
      </button>
      <h1 style={{ color: textColor }}>Hi my name is Romane</h1>
    </div>
  );
}
export default App;
