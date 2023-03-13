import React from "react";
import TestimonialsCard from "../../components/TestimonialsCard/TestimonialsCard";
// import "./Testimonials.css";

function Testimonials() {
    const data = [
        {
            review: "I've been using this product from AvantGarde and it's been a game-changer for me. It's secure, easy to use, and offers lightning-fast transactions. I'm impressed with their innovative approach to the digital asset space.",
            img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
            author: "Donald Trump",
            work: "President @ United States",
        },

        {
            review: "I've been using this product from AvantGarde and it's been a game-changer for me. It's secure, easy to use, and offers lightning-fast transactions. I'm impressed with their innovative approach to the digital asset space.",
            img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
            author: "Donald Trump",
            work: "President @ United States",
        },

        {
            review: "I've been using this product from AvantGarde and it's been a game-changer for me. It's secure, easy to use, and offers lightning-fast transactions. I'm impressed with their innovative approach to the digital asset space.",
            img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
            author: "Donald Trump",
            work: "President @ United States",
        },

        {
            review: "I've been using this product from AvantGarde and it's been a game-changer for me. It's secure, easy to use, and offers lightning-fast transactions. I'm impressed with their innovative approach to the digital asset space.",
            img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
            author: "Donald Trump",
            work: "President @ United States",
        },

        {
            review: "I've been using this product from AvantGarde and it's been a game-changer for me. It's secure, easy to use, and offers lightning-fast transactions. I'm impressed with their innovative approach to the digital asset space.",
            img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
            author: "Donald Trump",
            work: "President @ United States",
        },
    ];

    return (
        <div className="test subpixel-antialiased h-screen overflow-hidden  mx-auto ">
            <div className="testimonials-full">
                {" "}
                <h1 className="leading-6 text-white text-center font-black  not-italic text-[14px]  lg:text-[20px]  lg:my-4 2xl:mt-[100px] xl:text-[32px]">
                    Testimonials
                </h1>
                <h2 className="leading-6 text-white text-center font-normal  not-italic text-[10px]  lg:text-[16px]  lg:mb-4 xl:text-[20px] 2xl:mb-[40px]">
                    What our clients say about us
                </h2>
            </div>
            <div class="testimonials-container md:justify-center  md:flex md:max-w-[900px] lg:w-[100%]  items-center flex-wrap mx-auto  xl:max-w-[1400px]">
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
