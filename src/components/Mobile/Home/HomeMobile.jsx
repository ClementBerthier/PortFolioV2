import "./HomeMobile.scss";
import Header from "../Header/Header.jsx";

function HomeMobile() {
    const leftArrow = "<";
    const rightArrow = ">";
    return (
        <div className="home">
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
                        <p>France</p>
                        <p>+33 7 88 45 37 78</p>
                    </div>
                </div>
                <div className="homeSwipe">
                    <div className="leftArrow">{leftArrow}</div>
                    <p className="swipe">Swipe</p>
                    <div className="rightArrow">{rightArrow}</div>
                </div>
            </div>
        </div>
    );
}

export default HomeMobile;
