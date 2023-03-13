// import React from "react";
// import ContactUsCard from "../../components/ContactUsCard/ContactUsCard";
// import TextArea from "../../components/ContactUsCard/TextArea"
import "./ContactUs.css"

function ContactUs() {
    return (
        <div className="contactus mt-20">
            <h1 className="text-white font-black text-5xl text-center mb-16">Contact us</h1>
            <div className="flex-col px-3 max-w-[700px]">
                <form className=""> 
                    <div className="mb-5 flex">
                        <label className="text-white text-[32px] font-black mr-[85px] max-w-[150px] sm:max-w-[150px]">Name</label>
                        <input className="input-data flex-1" type="text" placeholder="Enter your name here"/>
                    </div>
                    <div className="mb-5 flex">
                        <label className="text-white text-[32px] font-black mr-[90px] max-w-[150px] sm:max-w-[150px]">Email</label>
                        <input className="input-data flex-1" type="email" placeholder="Enter your email here"/>
                    </div>
                    <div className="mb-5 flex">
                        <label className="text-white text-[32px] font-black mr-[27px] max-w-[150px] sm:max-w-[150px]">Company</label>
                        <input className="input-data flex-1" type="text" placeholder="Enter your company here"/>
                    </div>
                    <div className="mb-5 flex">
                        <label className="text-white text-[32px] font-black mr-[38px] pb-5 input max-w-[150px] sm:max-w-[150px]">Message</label>
                        <textarea className="message text-white flex-1" placeholder="Enter your message here"></textarea>
                    </div>
                    <button className="btn w-[150px] h-[40px] px-5 py-2 rounded-lg text-white font-black ml-44" type="submit"> Send </button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;