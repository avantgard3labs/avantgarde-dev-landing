import React, { useState } from "react";
import "./styles.css";

function NavContainer({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const toggleNav = () => setIsOpen(!isOpen);
    const buttonClass = " transition-all transform hover:scale-110";

    return (
        <div className="nav-container">
            <div className={"body " + (isOpen ? "nav-on" : "")}>
                {children ? (
                    React.cloneElement(children, {
                        currentPage,
                        setCurrentPage,
                        toggleNav,
                        isNavOpen: isOpen,
                    })
                ) : (
                    <></>
                )}
            </div>
            <div className={"nav " + (isOpen ? "nav-on" : "")}>
                {["Home", "Services", "Clients", "Testimonials", "Contact Us", "About"].map(
                    (item, index) => {
                        return (
                            <button
                                onClick={() => {
                                    setCurrentPage(index);
                                }}
                                className={buttonClass}
                            >
                                {item}
                            </button>
                        );
                    }
                )}
            </div>
        </div>
    );
}

export default NavContainer;
