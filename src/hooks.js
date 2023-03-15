import { useEffect, useState } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerWidth,
    });

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
