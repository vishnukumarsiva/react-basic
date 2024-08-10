import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/home";
import About from "./Pages/about";

const myPage = ReactDOM.createRoot(document.getElementById("react-app"));

myPage.render(<About />);
