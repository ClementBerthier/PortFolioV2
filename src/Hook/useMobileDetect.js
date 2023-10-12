import { useState, useEffect } from "react";

function useMobileDetect() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 450);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isMobile;
}

export default useMobileDetect;
