import React from "react";
import TestimonialsCard from "../../components/TestimonialsCard/TestimonialsCard";
import "./Testimonials.css";

function Testimonials() {
    const data = [
        {
            review: "I've been using this product from AvantGarde and it's been a game-changer for me. It's secure, easy to use, and offers lightning-fast transactions. I'm impressed with their innovative approach to the digital asset space.",
            img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
            author: "Donald Trump",
            work: "President @ United States",
        },
    ];

    return (
        <div>
            <div class="testimonial-container">
                {data.map((item) => {
                    console.log(`item is ${item}`);
                    return (
                        <TestimonialsCard
                            review={item.review}
                            author={item.author}
                            img={item.img}
                            work={item.work}
                        />
                    );
                })}
            </div>{" "}
        </div>
    );
}

export default Testimonials;
