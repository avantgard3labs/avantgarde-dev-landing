import SectionHeader from "../../components/shared/SectionHeader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../../components/shared/Carousel";

const Clients = () => {
    return (
        <div className=" w-full h-full flex flex-col items-center p-3">
            <SectionHeader />

            <div className=" w-full max-w-7xl flex-1 flex flex-col">
                <Carousel />
            </div>
        </div>
    );
};

export default Clients;
