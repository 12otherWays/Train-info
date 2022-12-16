import React from "react";
import { createRoot } from "react-dom/client";
import Card from "./Components/Card.jsx";
import "./App.scss";

const App = () => {
  return (
    <div className="container px-auto py-auto">
      <h1 className="text-secondary px-5 py-4">Projects </h1>
      <Card />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
