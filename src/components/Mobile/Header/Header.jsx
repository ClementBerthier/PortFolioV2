import "./Header.scss";
import logo from "/src/assets/image/logohead-white.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";

function Header() {
    return (
        <header className="header">
            <img className="header-logo" src={logo} alt="Logo" />
            <BurgerMenu />
        </header>
    );
}

export default Header;
