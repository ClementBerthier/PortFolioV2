import "./App.scss";
import useMobileDetect from "../../Hook/useMobileDetect.js";
import HomeDesktop from "../Desktop/Home/HomeDesktop.jsx";
import { Routes, Route } from "react-router-dom";
import HomeSwiper from "../Mobile/HomeSwiper/HomeSwiper.jsx";

function App() {
    const isMobile = useMobileDetect();

    return (
        <>
            {isMobile ? (
                <Routes>
                    {" "}
                    <Route path="/" element={<HomeSwiper />} />{" "}
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
