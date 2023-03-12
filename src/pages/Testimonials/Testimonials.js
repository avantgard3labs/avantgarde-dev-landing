import React from "react";
import "./Testimonials.css";
import { ImQuotesLeft } from "react-icons/im";

function Testimonials() {
    return (
        <div>
            <div class="testimonial-container">
                <div class="testimonial">
                    <div className="testContent">
                        <h3>
                            {" "}
                            <ImQuotesLeft />
                        </h3>
                        <h3 className="testReview">
                            I've been using this product from AvantGarde and
                            it's been a game-changer for me. It's secure, easy
                            to use, and offers lightning-fast transactions. I'm
                            impressed with their innovative approach to the
                            digital asset space.
                        </h3>
                        <img
                            className="testImg"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg"
                            alt=""
                        />
                        <h3 className="testName">Donald Trump</h3>
                        <h3 className="testWork">President</h3>
                    </div>

                    <div class="testimonial-content"></div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
