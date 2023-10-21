import "./HomeMobile.scss";
import Header from "../Header/Header.jsx";
import HomeLoader from "../../Common/HomeLoader/HomeLoader.jsx";

function HomeMobile() {
    return (
        <div className="home">
            <HomeLoader />
            <Header />
            <div className="homeContainer">
                <h1 className="homeTitle">
                    Developpeur Web et Web Mobile Javascript FullStack
                </h1>
                <div className="homeContact">contact</div>
                <div>swipe</div>
            </div>
        </div>
    );
}

export default HomeMobile;
