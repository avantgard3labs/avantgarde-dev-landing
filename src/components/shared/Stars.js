import { useEffect, useRef } from "react";
import "./styles.css";

const observer = new IntersectionObserver((entries) => {
    const container = document.getElementById("stars-container");
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            container?.removeChild(entry.target);
        }
    });
});

function createSmallStar(left) {
    const div = document.createElement("div");
    div.style.left = `${left}%`;
    div.setAttribute("class", "small-stars");
    return div;
}

function createBigStar(left) {
    const div = document.createElement("div");
    div.style.left = `${left}%`;
    div.setAttribute("class", "big-stars");
    return div;
}

function smallStars() {
    const container = document.getElementById("stars-container");
    setInterval(() => {
        var left = Math.floor(Math.random() * 100);
        const star = createSmallStar(left);
        container?.appendChild(star);
        observer.observe(star);
    }, 500);
}

function bigStars() {
    const container = document.getElementById("stars-container");
    setInterval(() => {
        var left = Math.floor(Math.random() * 100);
        const star = createBigStar(left);
        container?.appendChild(star);
        observer.observe(star);
    }, 1500);
}

const Stars = () => {
    const init = useRef(false);
    useEffect(() => {
        if (!init.current) {
            smallStars();
            bigStars();
            init.current = true;
        }
    }, []);

    return <div id="stars-container" className=" -z-10"></div>;
};

export default Stars;
