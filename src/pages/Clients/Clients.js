import SectionHeader from "../../components/shared/SectionHeader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../../components/shared/Carousel";

const Clients = () => {
    const clients = [
        {
            name: "Mushrohms NFT",
            image: require("../../assets/images/Mushrohms.png"),
        },
        {
            name: "Cryption Network",
            image: require("../../assets/images/9747.png"),
        },
        {
            name: "YFDAI Finance",
            image: require("../../assets/images/YfdaiFinance.png"),
        },

        {
            name: "Shiba Inu Token",
            image: require("../../assets/images/ShibaInuToken.png"),
        },
        {
            name: "Milkshake Finance",
            image: require("../../assets/images/MilkshakeFinance.png"),
        },
        {
            name: "Emillions NFT",
            image: require("../../assets/images/EmillionsNFT.png"),
        },
        {
            name: "Galaxia Protocol",
            image: require("../../assets/images/Galaxia.png"),
        },
        {
            name: "Galaxia Protocol",
            image: require("../../assets/images/Galaxia.png"),
        },
    ];

    return (
        <div className=" w-full h-full flex flex-col items-center p-3">
            <SectionHeader />

            <div className=" w-full max-w-7xl flex-1 mt-20">
                <Carousel clients={clients} />
            </div>
        </div>
    );
};

export default Clients;
