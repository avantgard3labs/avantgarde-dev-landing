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
            review: "I was impressed by the range of web3 services and products offered by this company. Their team was knowledgeable, responsive, and helped me navigate the complex world of blockchain technology with ease. I highly recommend them!",
            review2:
                "I was impressed by the range of web3 services and products offered by this company.",
            img: "https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.30808-6/292603223_920356132245429_1549884304985149373_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=w7RvLpNW3CwAX-mb6TL&_nc_ht=scontent.fmaa2-2.fna&oh=00_AfA3bhx8XgiOzgWC0XFZouR3dGVqciDEDnXSv6lQaFYmDw&oe=64160CA5",
            author: "Martin Rosenberger",
            work: "",
        },
        {
            review: "I was blown away by the level of expertise and professionalism displayed by this company. Their web3 services and products are top-notch, and their team was always available to answer my questions and provide support.",
            review2:
                "Their web3 services and products are top-notch, and their team was always available to answer my questions and provide support.",
            img: "https://i.pinimg.com/originals/32/38/6c/32386c72c7f2a8b5c1a10fc51c149cb1.jpg",
            author: "Darrin Barnet",
            work: "",
        },

        {
            review: "This company is truly at the forefront of the web3 revolution. Their innovative products and services have helped me to stay ahead of the curve and make the most of this exciting new technology. I can't recommend them enough!",
            review2:
                "This company is truly at the forefront of the web3 revolution.",
            img: "https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/yetunde/yetunde_profile_1536x1152.jpg?mw=400&car=2:2",
            author: "Félicienne Ojeda",
            work: "",
        },
        {
            review: "They have a deep understanding of blockchain technology and are always looking for ways to push the boundaries of what's possible. I look forward to working with them for years to come.",
            review2:
                "They have a deep understanding of blockchain technology and are always looking for ways to push the boundaries of what's possible.",
            img: "https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg",
            author: "Sylvan Palencia",
            work: "",
        },

        {
            review: "I was initially skeptical about the potential of blockchain technology, but this company has completely changed my mind. Their web3 products and services are innovative, user-friendly, and truly transformative.",
            review2:
                "Their web3 products and services are innovative, user-friendly, and truly transformative.",
            img: "https://www.morganstanley.com/content/dam/msdotcom/people/tiles/tile-shelbie.jpg.img.490.medium.jpg/1592241040775.jpg",
            author: "Kenna Platt",
            work: "",
        },
    ];

    return (
        <div className="subpixel-antialiased flex flex-col h-full items-center overflow-auto">
            <SectionHeader title="Testimonials" />
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
                                review2={item.review2}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
