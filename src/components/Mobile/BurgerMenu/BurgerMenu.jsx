import { useState } from "react";
import "./BurgerMenu.scss";

function BurgerMenu() {
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [burgerBarClass, setBurgerBarClass] = useState(
        "burger-bar unclicked"
    );

    const handleClick = () => {
        setIsMenuClicked(!isMenuClicked);
        setBurgerBarClass("burger-bar clicked");

        isMenuClicked
            ? setBurgerBarClass("burger-bar unclicked")
            : setBurgerBarClass("burger-bar clicked");
    };

    return (
        <div className="burger-menu" onClick={handleClick}>
            <div className={burgerBarClass}></div>
            <div className={burgerBarClass}></div>
            <div className={burgerBarClass}></div>
        </div>
    );
}

export default BurgerMenu;
