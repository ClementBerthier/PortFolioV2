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

    const svgValues1 = [
        0, 99.89, 99.84, 99.61, 99.27, 96.31, 84.25, 60, 33.75, 17.33, 7.17,
        3.84, 1.56, 0.78, 0.33, 0.13, 0,
    ];
    const svgValues2 = [
        0, 93.47, 86.94, 78.39, 69.84, 54.48, 39.12, 32.66, 26.21, 20.88, 15.56,
        11.58, 7.61, 4.98, 2.35, 1.17, 0,
    ];

    const [counter, setCounter] = useState(0);

    const svgPath = `M 0 0 H ${svgValues1[counter]}C ${svgValues1[counter]} 12.5 ${svgValues2[counter]} 12.5 ${svgValues2[counter]} 25 C ${svgValues2[counter]} 37.5 ${svgValues1[counter]} 37.5 ${svgValues1[counter]} 50 C ${svgValues1[counter]} 62.5 ${svgValues2[counter]} 62.5 ${svgValues2[counter]} 75 C ${svgValues2[counter]} 87.5 ${svgValues1[counter]} 87.5 ${svgValues1[counter]} 100 H 100 V 0`;

    const Counter = () => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 50);

        setTimeout(() => {
            clearInterval(interval);
            setCounter(0);
        }, 450);
    };

    useEffect(() => {
        Counter();
    }, [isButtonClicked]);

    const handleClick = () => {
        setIsButtonClicked((prevState) => !prevState);
        setBurgerBarClass(
            isButtonClicked ? "burger-bar unclicked" : "burger-bar clicked"
        );
        setBurgerMenuClass(
            isButtonClicked ? "burger-menu unclicked " : "burger-menu clicked"
        );
    };

    return (
        <>
            <div className="burger-button" onClick={handleClick}>
                <div className={burgerBarClass}></div>
                <div className={burgerBarClass}></div>
                <div className={burgerBarClass}></div>
            </div>
            <svg
                className={burgerMenuClass}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path d={svgPath}></path>
            </svg>
        </>
    );
}

export default BurgerButton;
