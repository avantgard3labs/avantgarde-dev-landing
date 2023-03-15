import React, { useState } from "react";
import "./styles.css";

function NavContainer({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);
    const buttonClass = " transition-all transform hover:scale-110";

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
                <button className={buttonClass}>Home</button>
                <button className={buttonClass}>Contact</button>
                <button className={buttonClass}>About Us</button>
                <button className={buttonClass}>Projects</button>
                <button className={buttonClass}>Random</button>
            </div>
        </div>
    );
}

export default NavContainer;
