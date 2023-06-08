

import Home from "../../components//finbot/components//Home/Home";
import Contact from "../../components//finbot/components//Contact/Contact";
import Footer from "../../components//finbot/components//Footer/Footer";
import Nav from "../../components//finbot/components//Navbar/Nav";
import "./Finbot.css"
import Chains from "../../components//finbot/components//Integrations/Chains";
import Features from "../../components//finbot/components//Features/Features";
import Input from "../../components//finbot/components//Input/Input";

function Finbot() {
    return (
        <div className=" antialiased">
            <Nav />

            <Home />

            <Chains />

            <Input />

            <Features />

            <Contact />

            <Footer />
        </div>
    );
}

export default Finbot;
