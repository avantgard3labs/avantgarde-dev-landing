import { useEffect, useState } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({});

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        });
    }, []);

    return windowSize;
}
