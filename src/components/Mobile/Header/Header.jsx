import "./Header.scss";
import logo from "/src/assets/image/logohead-white.png";
import BurgerMenu from "../BurgerButton/BurgerButton.jsx";

function Header() {
    return (
        <div className="header">
            <img className="header-logo" src={logo} alt="Logo" />
            <BurgerMenu />
        </div>
    );
}

export default Header;
