import { Dimmer, Loader } from "semantic-ui-react";
import "./HomeLoader.scss";
import { useState, useEffect } from "react";

function HomeLoader() {
    const [loaderValue, setLoaderValue] = useState(0);
    const [dimmerStatus, setDimmerStatus] = useState(true);
    const [fadeOut, setFadeOut] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setLoaderValue((prevValue) => {
                if (prevValue < 100) {
                    return prevValue + 1;
                } else {
                    clearInterval(interval);
                    return prevValue;
                }
            });
        }, 20);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (loaderValue === 100) {
            setDimmerStatus(false);
            setFadeOut("fadeOut");
        }
    }, [loaderValue]);

    return (
        <div className="homeLoader">
            {dimmerStatus ? (
                <Dimmer active>
                    {loaderValue + "%"}
                    <Loader size="massive"></Loader>
                </Dimmer>
            ) : (
                <Dimmer active className={fadeOut}>
                    {loaderValue + "%"}
                </Dimmer>
            )}
        </div>
    );
}

export default HomeLoader;
