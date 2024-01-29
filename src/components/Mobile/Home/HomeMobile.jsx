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
                    Developpement Web et Web Mobile Javascript FullStack
                </h1>
                <div className="homeContact">
                    <h2>Contact</h2>
                    <div className="homeContactInfo">
                        <p>berthierclementdev@gmail.com</p>
                        <p>81100 Castres</p>
                        <p>+33 7 88 45 37 78</p>
                    </div>
                </div>
                <div className="homeSwipe">swipe</div>
            </div>
        </div>
    );
}

export default HomeMobile;
