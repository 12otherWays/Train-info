import React from "react";
import { createRoot } from "react-dom/client";
import File from "./File.jsx";
import "./App.scss";
// import "./main.css";

const App = () => {
  return (
    <div>
      <h1>Hello React 16,Webpack 4 & Babel 7!</h1>
      <File />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
