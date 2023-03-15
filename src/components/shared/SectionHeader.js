const SectionHeader = ({ title, subtile, className }) => {
    return (
        <div
            className={
                " w-full flex items-center flex-col text-white gap-4 my-4 font-monument " +
                className
            }
        >
            <h1 className=" text-4xl font-bold">{title}</h1>
            {/* <p className=" text-xl">What our clients say about us</p> */}
        </div>
    );
};

export default SectionHeader;
