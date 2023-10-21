import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/Common/App.jsx";
import "../src/reset.scss";
import "../src/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
