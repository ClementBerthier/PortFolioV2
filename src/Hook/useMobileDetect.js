import React from "react";

function useMobileDetect() {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 520);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 520);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isMobile;
}

export default useMobileDetect;
