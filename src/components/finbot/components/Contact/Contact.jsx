import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div
            id="contact"
            className="flex-col  w-full mx-auto justify-center items-center align-middle mt-[60px]"
        >
            <h1 className="text-center text-3xl sm:text-6xl font-bold mb-5">
                Contact us
            </h1>

            <h1 className="text-center text-md sm:text-xl mb-5">
                admin@avantgardelabs.io
            </h1>
            <a href="https://docs.google.com/forms/d/12XoEPRtXo3SkxVvcpyCT7snhiZLLfTArZ7q3m6-nnpo/edit">
                <button className="border border-[#FF5F77] mx-auto justify-center flex p-3 rounded-full mb-3 text-sm sm:text-lg px-10 font-bold relative items-center align-middle cursor-pointer ">
                    Join waitlist
                </button>
            </a>
        </div>
    );
}

export default Contact;
