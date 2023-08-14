import { useEffect, useState } from "react";
import "./BurgerButton.scss";

function BurgerButton() {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [burgerBarClass, setBurgerBarClass] = useState(
        "burger-bar unclicked"
    );
    const [burgerMenuClass, setBurgerMenuClass] = useState(
        "burger-menu unclicked"
    );

    const handleClick = () => {
        setIsButtonClicked((prevState) => !prevState);
    };

    useEffect(() => {
        setBurgerBarClass(
            !isButtonClicked ? "burger-bar unclicked" : "burger-bar clicked"
        );
        setBurgerMenuClass(
            isButtonClicked ? "burger-menu unclicked " : "burger-menu clicked"
        );
    }, [isButtonClicked]);

    return (
        <>
            <div className="burger-button" onClick={handleClick}>
                <div className={burgerBarClass}></div>
                <div className={burgerBarClass}></div>
                <div className={burgerBarClass}></div>
            </div>
            <div className={burgerMenuClass}></div>
        </>
    );
}

export default BurgerButton;
