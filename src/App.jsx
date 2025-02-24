import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./button.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <Button label="Click Me" className="btn-success" events={{ click: handleClick }} id="testButton" />
      </div>
    </>
  );
}

export default App;
