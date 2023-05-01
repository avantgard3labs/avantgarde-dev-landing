import "./Footer.css";
import logo from "./logo-img/logo.png";
import telegram from "./logo-img/telegram.png";
import linkedin from "./logo-img/linkedin.png";
import github from "./logo-img/github.png";
import SectionHeader from "../../components/shared/SectionHeader";

function Footer() {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <SectionHeader title="Contact Us" />

            <div className=" flex-1 flex flex-col justify-end items-center mb-5">
                <div className="glass flex p-4 items-center max-w-6xl gap-8 flex-col md:flex-row">
                    <h1 className="text-white font-black text-2xl flex-1 text-center">
                        Need something for your web3 venture?
                    </h1>
                    <p className="text-white flex-1 text-center">
                        We'll build it for you! Hit us up during your convenient
                        time.
                    </p>
                    <button
                        onClick={() =>
                            window.open(
                                "https://calendly.com/sujinlk",
                                "_blank"
                            )
                        }
                        className="text-white text-xl font-black rounded-lg px-6 py-3  btn transform transition-all hover:scale-105"
                    >
                        Book a call
                    </button>
                </div>
            </div>

            <div className="fcontainer ">
                <div className="flex-col items-center justify-center mb-10 fcontainer">
                    <img alt="" src={logo} />
                    <h1 className="text-white font-black text-2xl font-monument">
                        Avant Garde Labs
                    </h1>
                    <p className="text-white">Excellence in innovation</p>
                </div>
            </div>

            <div className="fcontainer mb-4">
                <div className="flex">
                    {/* <a href="#">
                        <img
                            className="mr-16 w-[50px] h-[50px] transition-all hover:scale-110 transform"
                            alt=""
                            src={telegram}
                        />
                    </a> */}
                    <a href="https://github.com/sjking1999">
                        <img
                            className="mr-16 w-[50px] h-[50px] transition-all hover:scale-110 transform"
                            alt=""
                            src={github}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/sujink/">
                        <img
                            className="w-[50px] h-[50px] transition-all hover:scale-110 transform"
                            alt=""
                            src={linkedin}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
