import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import Glass from "../shared/Glass";

function ServicesCard({ title, body, svgComponent }) {
    return (
        <Glass className=" glass-hover text-white p-2 max-w-200 md:max-w-xs w-full">
            <div className="flex flex-col items-center sm:gap-1">
                <div className="w-16 h-16 sm:w-32 sm:h-32 rounded-full flex justify-center mt-4">
                    {svgComponent}
                </div>
                <p className=" text-xs sm:text-xl font-bold">{title}</p>
                <p className=" text-8 sm:text-xs">{body}</p>
            </div>
        </Glass>
    );
}

export default ServicesCard;
