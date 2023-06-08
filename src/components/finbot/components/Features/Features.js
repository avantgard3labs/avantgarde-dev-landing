import React from "react";
import "./Features.css";
import sone from "../../../../assets/finbot/s1.png";
import stwo from "../../../../assets/finbot/s2.png";
import sthree from "../../../../assets/finbot/s3.png";
import collaborate from "../../../../assets/finbot/collaborate.png";
import mask2 from "../../../../assets/finbot/mask2.svg";
function Features() {
    const data = [
        {
            img: sone,
            header: "Latest AI tech for loans and fintech",
            para: "Define rules, set rules and auto-labelling / tagging transactions. Set it all on autopilot to sync all your transactions to your ERP. ",
        },
        {
            img: collaborate,
            header: "Empower your business with custom solutions",
            para: " Reconcile digital assets (from NFTs to DeFi activity) on any chain/exchange/custody solution",
        },
        {
            img: sthree,
            header: "Save big: 4-5x cheaper than competitors",
            para: "Extensive reporting for impairment, Capital gains/losses as well as Crypto AP/AR. ",
        },
    ];

    return (
        <div className="relative ">
            <img
                src={mask2}
                alt=""
                className="w-[640px] absolute overflow-hidden left-[600px] h-[600px] top-0 z-[-30] blur-[150px]"
            />
            <img
                src={mask2}
                alt=""
                className="w-[640px] absolute overflow-hidden right-[600px] h-[600px] top-0 z-[-30] blur-[150px]"
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-10 pt-[4px]">
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 justify-items-center gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 mb-10  ">
                    {data.map((post) => (
                        <div className="rounded-[20px] p-[60px] items-center mx-auto flex  featureContainer align-middle justify-center bg-black">
                            <h1 className="mt-10 text-2xl sm:text-4xl font-bold text-center  pb-10 text-white ">
                                {post.header}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;
