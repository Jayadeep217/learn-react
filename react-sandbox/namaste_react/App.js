import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Namaste Reat using JSX 🚀</h1>;

const JsxHeading = () => (
  <div id="container" className="contain">
    <Title />
    <h1>React Functional component</h1>
  </div>
);

// console.log(JsxHeading);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<JsxHeading />);
