import React from "react";
import slackIcon from "../../../../assets/finbot/slackIcon.png";
import Discord from "../../../../assets/finbot/Discord.svg";
import picright from "../../../../assets/finbot/picright.png";
import picleft from "../../../../assets/finbot/picleft.png";
import mask2 from "../../../../assets/finbot/mask2.svg";
import piczleft from "../../../../assets/finbot/piczleft.svg";
import piczright from "../../../../assets/finbot/piczright.svg";
import piczcenter from "../../../../assets/finbot/piczcenter.svg";

function Chains() {
    return (
        <div className="w-[1400px] mx-auto mt-[300px] mb-[200px] md:mb-[100px] ">
            <div className="relative  ">
                <img
                    src={mask2}
                    alt=""
                    className="w-[1240px] absolute left-[-1100px] top-[-100px] z-[-30] blur-[150px] rotate-[144deg] overflow-hidden"
                />
                <img
                    src={mask2}
                    alt=""
                    className="w-[1040px] absolute right-[-500px] h-[800px] top-[200px] z-[-30] blur-[150px] rotate-[144deg] overflow-hidden"
                />
            </div>
            <div className="flex flex-col md:flex-row  gap-10">
                <div className="flex items-top md:w-1/2  ">
                    <div className="p-4">
                        <h2 className="text-lg md:text-5xl mt-[60px] ">
                            Document AI for bills, invoices &amp; complex
                            documents
                        </h2>
                        <p className="text-sm md:text-2xl opacity-60 mt-5">
                            Utilise cutting-edge document intelligence solutions
                            combined with a Reinforcement Learning with Human
                            Feedback (RLHF) based system to effortlessly process
                            bills and extract valuable intelligence. Combined
                            with Human in the loop for 100% accuracy.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="overflow-hidden ">
                        <img
                            src={piczright}
                            alt="Right Image 1"
                            className="object-contain w-[630px] md:h-full"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse mt-[-120px]">
                <div className="flex items-center md:w-1/2">
                    <div className="p-4">
                        <h2 className="text-lg md:text-5xl">
                            Business intelligence connected with your bank
                            accounts
                        </h2>
                        <p className="text-sm md:text-2xl opacity-60 mt-5">
                            Experience the convenience of a one-stop virtual AI
                            accountant seamlessly connected to your accounting
                            tool and banking data, providing valuable insights
                            within seconds.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img
                        src={piczcenter}
                        alt="Right Image 2"
                        className="object-contain w-[630px] md:h-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Chains;
