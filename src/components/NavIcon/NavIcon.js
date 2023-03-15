import React from "react";
import "./NavIcon.css";

const NavIcon = ({ isNavOpen, toggleNav }) => {
    return (
        <div
            className="absolute top-7 right-7 cursor-pointer "
            onClick={toggleNav}
        >
            <div className={`nav-icon ${isNavOpen ? "open" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default NavIcon;
