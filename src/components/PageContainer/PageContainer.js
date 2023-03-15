import moment from "moment";
import { useCallback, useEffect, useRef, useState } from "react";
import AGLogo from "../../pages/AGLogo/AGLogo";
import Testimonials from "../../pages/Testimonials/Testimonials";
import "./styles.css";

function PageContainer({ toggleNav }) {
    const [currentPage, setCurrentPage] = useState(0);
    const [internalPage, setInternalPage] = useState(0);
    const lastTime = useRef(moment());

    useEffect(() => {
        if (internalPage === currentPage) return;

        const page = document.querySelector("#something");
        page.classList.remove("visible");

        setTimeout(() => {
            setInternalPage(currentPage);
        }, 500);
    }, [currentPage]);

    useEffect(() => {
        const page = document.querySelector("#something");
        page.classList.add("visible");
    }, [internalPage]);

    const handleNavigation = (e) => {
        const isUp = e.deltaY > 0 ? true : false;
        const now = moment();

        if (now.diff(lastTime.current, "second") > 0) {
            setCurrentPage((currentPage) => (currentPage === 0 ? 1 : 0));
            lastTime.current = now;
        }
    };

    useEffect(() => {
        let touchstartY = 0;
        let touchendY = 0;

        document.addEventListener("touchstart", (e) => {
            touchstartY = e.changedTouches[0].screenY;
        });

        document.addEventListener("touchend", (e) => {
            touchendY = e.changedTouches[0].screenY;
            const isUp = touchstartY - touchendY > 0;
            setCurrentPage((currentPage) => (currentPage === 0 ? 1 : 0));
        });
    }, []);

    useEffect(() => {
        document.addEventListener("wheel", handleNavigation, true);

        return () => {
            document.removeEventListener("wheel", handleNavigation);
        };
    }, []);

    const getPage = () => {
        switch (internalPage) {
            case 0:
                return <AGLogo />;
            case 1:
                return <Testimonials />;
            default:
                return <AGLogo />;
        }
    };

    return (
        <div className={`page visible`} id="something">
            {getPage()}
        </div>
    );
}

export default PageContainer;
