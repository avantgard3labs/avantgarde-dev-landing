import { useState } from "react";
import React from "react";
import SectionHeader from "../../components/shared/SectionHeader";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import "../../components/TestimonialsCard/Blob/Blob.css";

import { ReactComponent as FigmaLogo } from "../../assets/service-icons/Figma.svg";
import { ReactComponent as ReactLogo } from "../../assets/service-icons/React.svg";
import { ReactComponent as NodeLogo } from "../../assets/service-icons/Node.svg";
import { ReactComponent as SolidityLogo } from "../../assets/service-icons/Solidity.svg";
import { ReactComponent as NFTLogo } from "../../assets/service-icons/NFT.svg";
import { ReactComponent as EthereumLogo } from "../../assets/service-icons/Ethereum.svg";

function Services() {
    const [pageIndex, setPageIndex] = useState(1);
    const handleIndexChange = (newIndex) => {
        setPageIndex(newIndex);
    };

    const data = [
        {
            svg: <FigmaLogo />,
            title: "UI / UX Design",
            body: "Figma, Adobe XD, TailwindCSS",
        },
        {
            svg: <ReactLogo />,
            title: "Frontend Development",
            body: "ReactJS, NextJS, Angular",
        },
        {
            svg: <NodeLogo />,
            title: "Backend Development",
            body: "ExpressJS, Databases",
        },
        {
            svg: <SolidityLogo />,
            title: "Smart Contract Development",
            body: "OpenZeppelin, Gnosis",
        },
        {
            svg: <NFTLogo />,
            title: "NFT Development",
            body: "Bespoke NFT Projects ",
        },
        {
            svg: <EthereumLogo />,
            title: "DApp Development",
            body: "Uniswap, OpenSea",
        },
    ];

    return (
        <div className="subpixel-antialiased flex flex-col h-full items-center overflow-auto">
            <SectionHeader title="Services we provide" />
            <div className=" flex-1 justify-center w-full items-center flex-col flex">
                <div className=" w-full flex justify-center flex-wrap gap-3 max-w-7xl  px-1 sm:px-3 m-0">
                    {data.map((item, index) => {
                        return (
                            <ServicesCard
                                key={index}
                                svgComponent={item.svg}
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
