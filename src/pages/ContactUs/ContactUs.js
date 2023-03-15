import SectionHeader from "../../components/shared/SectionHeader";
import "./ContactUs.css";

function ContactUs() {
    const inputClass =
        "glass px-4 text-white placeholder-white flex-1 p-3 sm:text-base text-sm";
    const labelClass =
        "text-white  sm:text-[26px] font-medium mr-[85px] sm:w-28 text-sm w-8 font-monument mt-2";
    return (
        <div className="w-full h-full flex  flex-col items-center">
            <SectionHeader title="Contact Us" />
            <div className=" flex-1 flex w-full justify-center items-center ">
                <div className="flex flex-col max-w-3xl w-full gap-5 px-3">
                    <div className=" flex w-full">
                        <label className={labelClass}>Name</label>
                        <input
                            className={inputClass}
                            type="text"
                            placeholder="Enter your name here"
                        />
                    </div>
                    <div className=" flex w-full">
                        <label className={labelClass}>Email</label>
                        <input
                            className={inputClass}
                            type="text"
                            placeholder="Enter your name here"
                        />
                    </div>
                    <div className=" flex w-full">
                        <label className={labelClass}>Company</label>
                        <input
                            className={inputClass}
                            type="text"
                            placeholder="Enter your name here"
                        />
                    </div>
                    <div className=" flex w-full">
                        <label className={labelClass}>Message</label>
                        <textarea
                            className={inputClass + " h-28 p-3"}
                            placeholder="Enter your message here"
                        ></textarea>
                    </div>
                    <button
                        className="btn w-[150px] h-[40px] px-5 py-2 rounded-lg text-white font-black sm:ml-[197px] ml-32 hover:scale-110 transform transition-all font-monument"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
