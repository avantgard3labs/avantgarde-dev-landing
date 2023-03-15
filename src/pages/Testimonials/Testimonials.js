import { useState } from "react";
import React from "react";
import SectionHeader from "../../components/shared/SectionHeader";
import TestimonialsCard from "../../components/TestimonialsCard/TestimonialsCard";
import Blob from "../../components/TestimonialsCard/Blob/Blob";
import "../../components/TestimonialsCard/Blob/Blob.css";

import "./Testimonials.css";

function Testimonials() {
    const [pageIndex, setPageIndex] = useState(1);
    const handleIndexChange = (newIndex) => {
        setPageIndex(newIndex);
    };

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
        <div className="subpixel-antialiased flex flex-col h-full items-center overflow-auto">
            <SectionHeader />
            <div className=" flex-1 justify-center w-full items-center flex-col flex">
                <div className=" w-full flex justify-center flex-wrap gap-3 max-w-7xl items-start px-3 m-0">
                    {data.map((item, index) => {
                        return (
                            <TestimonialsCard
                                key={index}
                                review={item.review}
                                author={item.author}
                                img={item.img}
                                work={item.work}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
