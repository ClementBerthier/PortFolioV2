import "./App.scss";
import useMobileDetect from "../../Hook/useMobileDetect.js";
import HomeMobile from "../Mobile/Home/HomeMobile.jsx";
import HomeDesktop from "../Desktop/Home/HomeDesktop.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
    const isMobile = useMobileDetect();

    return (
        <>
            {isMobile ? (
                <Routes>
                    {" "}
                    <Route path="/" element={<HomeMobile />} />{" "}
                </Routes>
            ) : (
                <Routes>
                    {" "}
                    <Route path="/" element={<HomeDesktop />} />{" "}
                </Routes>
            )}
        </>
    );
}

export default App;
