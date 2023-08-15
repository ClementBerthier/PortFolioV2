import React from "react";

function useMobileDetect() {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 425);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 425);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isMobile;
}

export default useMobileDetect;
