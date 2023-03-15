import React from "react";
import { ImQuotesLeft } from "react-icons/im";
// import "../TestimonialsCard/TestimonialsCard.css";


function TestimonialsCard({ review, author, work, img }) {
    console.log(review,author,work,img)
    return (
        <div className="p-1  text-center testimonialsBox w-[100%] max-w-[400px] mx-auto my-2 backdrop-blur-md  text-white/[0.85] bg-black-600/[0.1]  border-white border-[1.6px] border-solid rounded-[10px] justify-center md:my-1 lg:p-2 xl:mb-5 xl:mx-3 xl:p-5">
            <div className="testimonialsContent">
                <div className="testimonialsQuotes">
                    {" "}
                    <ImQuotesLeft className="text-[14px]  lg:text-[20px]  lg:mb-1" />
                </div>

                <h3 className="font-normal leading-5 text-left not-italic mb-2 text-[10px] lg:text-[14px] lg:mb-5">
                    {review}
                </h3>
                <img
                    src={img}
                    alt="reviewerPic"
                    className="bg-center bg-cover mx-auto my-0 rounded-full bg-no-repeat w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16  lg:mb-2 "
                />
                <h4 className="font-normal leading-4  not-italic  text-[8px] m-[-2px] lg:text-[12px]  lg:mb-1">
                    {author}
                </h4>
                <h5 className="font-normal leading-3  not-italic text-[6px] m-[-2px] lg:text-[10px]  lg:mb-1">
                    {work}
                </h5>
            </div>
        </div>
    );
}

export default TestimonialsCard;
