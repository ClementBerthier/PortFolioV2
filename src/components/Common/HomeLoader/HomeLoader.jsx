import { Dimmer, Loader } from "semantic-ui-react";
import "./HomeLoader.scss";
import { useState, useEffect } from "react";

function HomeLoader() {
    const [loaderValue, setLoaderValue] = useState(0);
    const [dimmerStatus, setDimmerStatus] = useState(true);
    const [fadeOut, setFadeOut] = useState("");
    const [isLoaderDone, setIsLoaderDone] = useState(false);

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
        const timer = setTimeout(() => {
            setIsLoaderDone(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loaderValue === 1000) {
            setDimmerStatus(false);
            setFadeOut("fadeOut");
        }
    }, [loaderValue]);

    return (
        <div className="homeLoader">
            {dimmerStatus && !isLoaderDone ? (
                <Dimmer active>
                    {loaderValue + "%"}
                    <Loader size="massive"></Loader>
                </Dimmer>
            ) : !isLoaderDone ? (
                <Dimmer active className={fadeOut}>
                    {loaderValue + "%"}
                </Dimmer>
            ) : null}
        </div>
    );
}

export default HomeLoader;
