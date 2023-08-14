import "./Header.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";

function Header() {
    return (
        <header className="header">
            <img
                className="header-logo"
                src="../src/assets/image/logohead-white.png"
                alt="Logo"
            />
            <BurgerMenu />
        </header>
    );
}

export default Header;
