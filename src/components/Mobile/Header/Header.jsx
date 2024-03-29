import "./Header.scss";
import logo from "/src/assets/image/logohead-white.png";
import BurgerMenu from "../BurgerButton/BurgerButton.jsx";

function Header(location) {
    return (
        <div className="header">
            {location.place === "home" ? (
                <img className="header-logo" src={logo} alt="Logo" />
            ) : location.place === "project" ? (
                <div className="onProject">
                    <p className="header_counterPage">1/4</p>
                    <div className="progress_bar">
                        <div className="progress_bar_fill"></div>
                        <div className="progress_bar_empty"></div>
                    </div>
                </div>
            ) : null}

            <BurgerMenu />
        </div>
    );
}

export default Header;
