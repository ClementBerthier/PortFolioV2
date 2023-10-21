import "./App.scss";
import useMobileDetect from "../../Hook/useMobileDetect.js";
import HomeMobile from "../Mobile/Home/HomeMobile.jsx";
import HomeDesktop from "../Desktop/Home/HomeDesktop.jsx";
import { SafeAreaView } from "react-native";

function App() {
    const isMobile = useMobileDetect();

    return (
        <SafeAreaView>
            {isMobile ? <HomeMobile /> : <HomeDesktop />}
        </SafeAreaView>
    );
}

export default App;
