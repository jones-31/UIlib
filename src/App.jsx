import { useState } from "react";
import "./App.css";
import "./textbox.css";
import Button from "./button.jsx";
import Card from "./webcomponents/card.jsx";

function App() {
  return (
    <>
      <h1>WEBAPP</h1>
      <Card
        image="product.jpg"
        title="Product Name"
        description="This is a great product."
      >
        <button>Buy</button>
        <button>Share</button>
      </Card>
    </>
  );
}

export default App;
