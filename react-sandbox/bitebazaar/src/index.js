import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <MainBody />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<AppLayout />);
