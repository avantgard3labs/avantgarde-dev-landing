import SectionHeader from "../../components/shared/SectionHeader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../../components/shared/Carousel";

const Clients = () => {
    const clients = [
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
            name: "Galaxia",
            image: require("../../assets/images/Galaxia.png"),
        },
        {
            name: "Gains Associates",
            image: require("../../assets/images/gains.png"),
        },
        {
            name: "Flash Arb Bot",
            image: require("../../assets/images/flash.png"),
        },
        {
            name: "Chilli Swap",
            image: require("../../assets/images/chilli.png"),
        },
        {
            name: "Asva Labs",
            image: require("../../assets/images/asva.png"),
        },
        {
            name: "GOGO Protocol",
            image: require("../../assets/images/gogo.png"),
        },
        {
            name: "Swix DAO",
            image: require("../../assets/images/swix.png"),
        },
        {
            name: "Phantom DAO",
            image: require("../../assets/images/phantom.png"),
        },
        {
            name: "Talent Protocol",
            image: require("../../assets/images/talent.png"),
        },
    ];

    return (
        <div className=" w-full h-full flex flex-col items-center p-3">
            <SectionHeader title="Our Clients" />

            <div
                className=" w-full max-w-7xl"
                style={{
                    marginTop: "20vh",
                }}
            >
                <Carousel clients={clients} />
            </div>
        </div>
    );
};

export default Clients;
