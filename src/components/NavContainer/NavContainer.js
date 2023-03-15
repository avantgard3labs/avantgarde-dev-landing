import React, { useState } from "react";
import "./styles.css";

function NavContainer({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <div className="nav-container">
            <div className={"body " + (isOpen ? "nav-on" : "")}>
                {children ? (
                    React.cloneElement(children, {
                        toggleNav,
                        isNavOpen: isOpen,
                    })
                ) : (
                    <></>
                )}
            </div>
            <div className={"nav " + (isOpen ? "nav-on" : "")}>
                <button>Home</button>
                <button>Contact</button>
                <button>About Us</button>
                <button>Projects</button>
                <button>Random</button>
            </div>
        </div>
    );
}

export default NavContainer;
