import "./Footer.css";
import logo from "./logo-img/logo.png";
import telegram from "./logo-img/telegram.png";
import linkedin from "./logo-img/linkedin.png";
import github from "./logo-img/github.png";

function Footer() {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className=" flex-1 flex flex-col justify-end items-center mb-5">
                <div className="glass flex p-4 items-center max-w-6xl gap-8 flex-col md:flex-row">
                    <h1 className="text-white font-black text-2xl flex-1 text-center">
                        Need something for your web3 venture?
                    </h1>
                    <p className="text-white flex-1 text-center">
                        We'll build it for you! Hit us up during your convenient
                        time.
                    </p>
                    <button className="text-white text-xl font-black rounded-lg px-4 py-2 btn w-[206px] h-[56px] btn">
                        Lets Go!
                    </button>
                </div>
            </div>

            <div className="fcontainer ">
                <div className="flex-col items-center justify-center mb-10 fcontainer">
                    <img alt="" src={logo} />
                    <h1 className="text-white font-black text-2xl">
                        Avant Garde Labs
                    </h1>
                    <p className="text-white font-fam">
                        Excellence in innovation
                    </p>
                </div>
            </div>

            <div className="fcontainer mb-4">
                <div className="flex">
                    <a href="tele">
                        <img
                            className="mr-16 w-[50px] h-[50px]"
                            alt=""
                            src={telegram}
                        />
                    </a>
                    <a href="git">
                        <img
                            className="mr-16 w-[50px] h-[50px]"
                            alt=""
                            src={github}
                        />
                    </a>
                    <a href="linkedi">
                        <img
                            className="w-[50px] h-[50px]"
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
