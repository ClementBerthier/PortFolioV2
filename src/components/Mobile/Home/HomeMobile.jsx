import "./HomeMobile.scss";
import Header from "../Header/Header.jsx";
import HomeLoader from "../../Common/HomeLoader/HomeLoader.jsx";

function HomeMobile() {
    return (
        <div className="home">
            <HomeLoader />
            <Header />
        </div>
    );
}

export default HomeMobile;
