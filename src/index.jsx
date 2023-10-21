import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/Common/App.jsx";
import "../src/reset.scss";
import "../src/index.scss";
import { SafeAreaView } from "react-native";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <SafeAreaView>
            <App />
        </SafeAreaView>
    </React.StrictMode>
);
