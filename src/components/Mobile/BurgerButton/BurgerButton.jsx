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
        0, 99.89, 99.875, 99.84, 99.72, 99.61, 99.44, 99.27, 97.79, 96.31,
        90.28, 84.25, 72.12, 60, 46.87, 33.75, 25.54, 17.33, 12.25, 7.17, 5.5,
        3.84, 2.7, 1.56, 1.17, 0.78, 0.55, 0.33, 0.23, 0.13, 0.06, 0,
    ];
    const svgValues2 = [
        0, 93.47, 90.2, 86.94, 82.66, 78.39, 74.11, 69.84, 62.16, 54.48, 46.8,
        39.12, 35.89, 32.66, 29.43, 26.21, 23.54, 20.88, 18.22, 15.56, 13.57,
        11.58, 9.59, 7.61, 6.29, 4.98, 3.66, 2.35, 1.76, 1.17, 0.58, 0,
    ];

    const [counter, setCounter] = useState(0);

    const svgPath = `M 0 0 H ${svgValues1[counter]}C ${svgValues1[counter]} 12.5 ${svgValues2[counter]} 12.5 ${svgValues2[counter]} 25 C ${svgValues2[counter]} 37.5 ${svgValues1[counter]} 37.5 ${svgValues1[counter]} 50 C ${svgValues1[counter]} 62.5 ${svgValues2[counter]} 62.5 ${svgValues2[counter]} 75 C ${svgValues2[counter]} 87.5 ${svgValues1[counter]} 87.5 ${svgValues1[counter]} 100 H 100 V 0`;

    const Counter = () => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 25);

        setTimeout(() => {
            clearInterval(interval);
            setCounter(0);
        }, 800);
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
