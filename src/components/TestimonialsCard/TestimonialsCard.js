import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import useWindowSize from "../../hooks";
import Glass from "../shared/Glass";
// import "../TestimonialsCard/TestimonialsCard.css";

function TestimonialsCard({ review, author, work, img, review2 }) {
    const { width, height } = useWindowSize();
    return (
        <Glass className=" glass-hover text-white p-2 max-w-200 md:max-w-xs ">
            <div className="testimonialsContent">
                <div className="testimonialsQuotes">
                    {" "}
                    <ImQuotesLeft className="text-[14px]  lg:text-[20px]  lg:mb-1" />
                </div>

                <h3 className="font-normal text-left not-italic mb-2 text-[10px] lg:text-[14px] lg:mb-5 leading-3 sm:leading-5">
                    {width > 600 ? review : review2}
                </h3>
                <div className=" flex flex-col items-center sm:gap-1">
                    <img
                        src={img}
                        alt="reviewerPic"
                        className="w-6 h-6 sm:w-10 sm:h-10 rounded-full object-cover"
                    />
                    <p className=" text-xs sm:text-sm">{author}</p>
                    <p className=" text-8 sm:text-xs">{work}</p>
                </div>
            </div>
        </Glass>
    );
}

export default TestimonialsCard;
