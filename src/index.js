import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "aos/dist/aos.css";
import "./App.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
