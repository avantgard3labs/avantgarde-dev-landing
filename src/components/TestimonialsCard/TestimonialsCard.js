import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import "../TestimonialsCard/TestimonialsCard.css";

function TestimonialsCard({ review, author, work, img }) {
    console.log(review,author,work,img)
    return (
        <div className="testimonialsBox">
            <div className="testimonialsContent">
                <div className="testimonialsQuotes">
                    {" "}
                    <ImQuotesLeft />
                </div>

                <h3>{review}</h3>
                <img src={img} alt="" />
                <h4>{author}</h4>
                <h5>{work}</h5>
            </div>
        </div>
    );
}

export default TestimonialsCard;
