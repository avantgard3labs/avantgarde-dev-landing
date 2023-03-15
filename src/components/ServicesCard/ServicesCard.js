import React from "react";
import Glass from "../shared/Glass";

function ServicesCard({ title, body, svgComponent }) {
    return (
        <Glass className=" glass-hover text-white p-2 max-w-200 md:max-w-xs w-full">
            <div className="flex flex-col items-center gap-1 justify-center">
                {React.cloneElement(svgComponent, {
                    className: "w-10 h-10 sm:w-16 sm:h-16 md:h-28 md:w-28",
                })}
                <p className=" text-xs sm:text-base md:text-xl font-bold text-center">
                    {title}
                </p>
                <p className=" text-8 sm:text-xs">{body}</p>
            </div>
        </Glass>
    );
}

export default ServicesCard;
