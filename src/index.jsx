import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/Common/App.jsx";
import "../src/reset.scss";
import "../src/index.scss";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);
