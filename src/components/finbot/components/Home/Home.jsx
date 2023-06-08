import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Home.css";
import mac from "../../../../assets/finbot/mac.png";
import report from "../../../../assets/finbot/report.png";
import monitoroff from "../../../../assets/finbot/monitoroff.png";
import firsttext from "../../../../assets/finbot/chatthreebub.png";
import secondtext from "../../../../assets/finbot/Bubbleright.png";
import monitor from "../../../../assets/finbot/monitor.png";
import thirdtext from "../../../../assets/finbot/thirdtext.png";
import mask1 from "../../../../assets/finbot/mask1.svg";

function Home() {
    const [showMonitor, setShowMonitor] = useState(false);
    const [showFirstText, setShowFirstText] = useState(false);
    const [showSecondText, setShowSecondText] = useState(false);
    const [showHr, setShowHr] = useState(false);
    const [showHeading, setShowHeading] = useState(false);
    const [showInvoice, setShowInvoice] = useState(false);

    useEffect(() => {
        const loopDuration = 7000; // Total duration of the animation loop
        const monitorDelay = 1000; // Delay before showing the monitor
        const firstTextDelay = 3000; // Delay before showing the first text
        const secondTextDelay = 5000; // Delay before showing the second text

        const loop = setInterval(() => {
            // Show monitor after the specified delay
            setTimeout(() => {
                setShowMonitor(true);
            }, monitorDelay);

            // Show first text after the specified delay
            setTimeout(() => {
                setShowFirstText(true);
            }, firstTextDelay);

            // Show second text after the specified delay
            setTimeout(() => {
                setShowSecondText(true);
            }, secondTextDelay);

            // Reset visibility of elements after the loop duration
            setTimeout(() => {
                setShowMonitor(false);
                setShowFirstText(false);
                setShowSecondText(false);
            }, loopDuration);
        }, loopDuration);

        return () => {
            clearInterval(loop);
        };
    }, []);

    const fadeProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: showMonitor ? 1 : 0 },
        config: { duration: 1000 },
    });

    const firstTextFadeProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: showFirstText ? 1 : 0 },
        config: { duration: 1000 },
    });

    const secondTextFadeProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: showSecondText ? 1 : 0 },
        config: { duration: 1000 },
    });

    useEffect(() => {
        const fadeindur = 4000; // Duration of the fade-in animation
        const fadeoutdur = 2000; // Duration of the fade-out animation

        const loop = setInterval(() => {
            // Fade in
            setShowInvoice(true);

            // Fade out after the fade-in duration
            setTimeout(() => {
                setShowInvoice(false);
            }, fadeindur);

            // Toggle back to fade in after the fade-in and fade-out durations
            setTimeout(() => {
                setShowInvoice(true);
            }, fadeindur + fadeoutdur);
        }, fadeindur + fadeoutdur); // Start the loop after fade-in and fade-out durations

        return () => {
            clearInterval(loop);
        };
    }, []);

    return (
        <div className="relative">
            <img
                src={mask1}
                alt=""
                className="w-[1240px] absolute overflow-hidden left-[-300px] top-[-400px] z-[-30] blur-[150px] rotate-[113deg]"
            />

            <div className="homeContainer w-full h-screen ellipse ellipses relative">
                <div className="flex flex-col p-2 md:p-4 max-w-[1400px] mx-auto">
                    <div className="mb-[280px]">
                        <h2
                            className={`leading-10 text-2xl md:text-3xl lg:text-[55px] md:mb-[20px] text-center text-white mt-[-140px] font-semibold `}
                        >
                            Your AI layer for
                        </h2>

                        <h2
                            className={`leading-10 font-semibold text-2xl md:text-3xl lg:text-[55px] mb-3 md:mb-[50px] text-center text-white ${
                                showInvoice ? "faade-in" : "faade-out"
                            }`}
                        >
                            next-gen Indian fintech
                        </h2>

                        <hr
                            id="hrElement"
                            className={`my-5 styless ${showHr ? "" : "none"}`}
                        />

                        <button className=" cursor-pointer border border-[#FF5F77] mx-auto justify-center flex p-3 rounded-full mb-3 text-sm sm:text-lg px-10 font-bold relative items-center align-middle    ">
                            Join waitlist
                        </button>
    
                    </div>

                    {!showMonitor && (
                        <img
                            src={monitoroff}
                            alt=""
                            className="absolute z-1 bottom-[-200px] left-1/2 transform -translate-x-1/2"
                        />
                    )}

                    {showMonitor && (
                        <animated.img
                            src={monitor}
                            alt=""
                            className="absolute z-1 bottom-[-200px] left-1/2 transform -translate-x-1/2"
                            style={fadeProps}
                        />
                    )}

                    {showFirstText && (
                        <animated.img
                            src={firsttext}
                            alt=""
                            className="md:w-[300px] w-[180px] z-20 absolute sm:bottom-0 md:ml-[300px] ml-[100px] mb-[60px] bottom-[-30px]  "
                            style={firstTextFadeProps}
                        />
                    )}

                    {showSecondText && (
                        <animated.img
                            src={thirdtext}
                            alt=""
                            className="md:w-[300px] w-[180px] z-20 absolute bottom-[-80px] ml-[100px]"
                            style={secondTextFadeProps}
                        />
                    )}

                    {/* <img
                        src={report}
                        alt=""
                        className="absolute z-1 bottom-0 left-[400px] transform -translate-x-1/2 opacity-40"
                    /> */}
                </div>
            </div>
        </div>
    );
}

export default Home;
