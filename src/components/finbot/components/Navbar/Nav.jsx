import React from "react";
import "./Navbar.css";

function Nav() {
    return (
        <div className=" flex align-middle items-center  justify-between p-8 pr-10 ">
            <div className="">
                <h3 className="text-2xl font-bold">FinBot</h3>
            </div>
            <div className="right hidden sm:flex  font-semibold text-2xl">
                <ul className="flex gap-10 leading-tight">
            
                    <a href="#features">
                        <li>Features</li>
                    </a>
           
                    <a href="#contact">
                        <li>Contact</li>
                    </a>
                </ul>
            </div>
        </div>
    );
}
export default Nav;
