import moment from "moment";
import { useCallback, useEffect, useRef, useState } from "react";
import NavIcon from "../NavIcon/NavIcon";
import AGLogo from "../../pages/AGLogo/AGLogo";
import Clients from "../../pages/Clients/Clients";
import ContactUs from "../../pages/ContactUs/ContactUs";
import Services from "../../pages/Services/Services";
import Footer from "../../pages/Footer/Footer";
import Testimonials from "../../pages/Testimonials/Testimonials";
import Stars from "../shared/Stars";
import Blob from "../TestimonialsCard/Blob/Blob";
import "./styles.css";

function PageContainer({ currentPage, setCurrentPage, toggleNav, isNavOpen }) {
    const [internalPage, setInternalPage] = useState(0);
    const lastTime = useRef(moment());

    const numberOfPages = 6;

    const getTargetPage = (currentPage, isUp) => {
        if (isUp) {
            if (currentPage !== 0) {
                return currentPage - 1;
            } else {
                return currentPage;
            }
        } else {
            if (currentPage === numberOfPages - 1) {
                return currentPage;
            }
            return (currentPage + 1) % numberOfPages;
        }
    };
    useEffect(() => {
        if (internalPage === currentPage) return;

        const page = document.querySelector("#something");
        page?.classList.remove("visible");

        setTimeout(() => {
            setInternalPage(currentPage);
        }, 500);
    }, [currentPage]);

    useEffect(() => {
        const page = document.querySelector("#something");
        page?.classList.add("visible");
    }, [internalPage]);

    const handleNavigation = (e) => {
        const isUp = e.deltaY < 0 ? true : false;
        const now = moment();

        if (now.diff(lastTime.current, "second") > 0) {
            setCurrentPage((currentPage) => getTargetPage(currentPage, isUp));
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
            const dragDistance = touchstartY - touchendY;
            if (Math.abs(dragDistance) < 50) {
                return;
            }
            const isUp = touchstartY - touchendY < 0;
            const now = moment();
            if (now.diff(lastTime.current, "second") > 0) {
                setCurrentPage((currentPage) =>
                    getTargetPage(currentPage, isUp)
                );
                lastTime.current = now;
            }
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
                return <Services />;
            case 2:
                return <Clients />;
            case 3:
                return <Testimonials />;
            case 4:
                return <ContactUs />;
            case 5:
                return <Footer />;

            default:
                return <AGLogo />;
        }
    };

    return (
        <>
            <Stars />
            <Blob className={`page${currentPage + 1}`} />
            <div
                className={`page visible border-8 z-10 ${
                    isNavOpen ? " border-white" : "border-transparent"
                }`}
                id="something"
            >
                {getPage()}
            </div>
            <NavIcon isNavOpen={isNavOpen} toggleNav={toggleNav} />
        </>
    );
}

export default PageContainer;
