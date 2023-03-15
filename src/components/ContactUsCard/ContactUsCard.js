import React from "react";
import "../ContactUsCard/ContactUsCard.css"

function ContactUsCard({ title, placeholder }) {
    return (
        <div>
            <form>
                <label className="text-white">{title}</label>
                <input type="text" placeholder={placeholder} />
            </form>
        </div>
    );
}

export default ContactUsCard;