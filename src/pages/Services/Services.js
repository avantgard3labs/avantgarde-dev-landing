import { useState } from "react";
import React from "react";
import SectionHeader from "../../components/shared/SectionHeader";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import "../../components/TestimonialsCard/Blob/Blob.css";

function Services() {
    const [pageIndex, setPageIndex] = useState(1);
    const handleIndexChange = (newIndex) => {
        setPageIndex(newIndex);
    };

    const data = [
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
            title: "Donald Trump",
            body: "President @ United States",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
            title: "Donald Trump",
            body: "President @ United States",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
            title: "Donald Trump",
            body: "President @ United States",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
            title: "Donald Trump",
            body: "President @ United States",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
            title: "Donald Trump",
            body: "President @ United States",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
            title: "Donald Trump",
            body: "President @ United States",
        },
    ];

    return (
        <div className="subpixel-antialiased flex flex-col h-full items-center overflow-auto">
            <SectionHeader />
            <div className=" flex-1 justify-center w-full items-center flex-col flex">
                <div className=" w-full flex justify-center flex-wrap gap-3 max-w-7xl items-start px-3 m-0">
                    {data.map((item, index) => {
                        return (
                            <ServicesCard
                                key={index}
                                img={item.img}
                                title={item.title}
                                body={item.body}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Services;
