import "./App.scss";
import useMobileDetect from "../../Hook/UseMobileDetect.js";
import HomeMobile from "../Mobile/App/HomeMobile.jsx";
import HomeDesktop from "../Desktop/HomeDesktop.jsx";

function App() {
    const isMobile = useMobileDetect();

    return <>{isMobile ? <HomeMobile /> : <HomeDesktop />}</>;
}

export default App;
