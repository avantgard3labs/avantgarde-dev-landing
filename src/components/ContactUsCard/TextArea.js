import React from "react";
import "../ContactUsCard/ContactUsCard.css"

function ContactUsCard({ title, placeholder }) {
    return (
        <div>
            <form>
                <label className="">{title}</label>
                <textarea placeholder={placeholder}></textarea>
            </form>
        </div>
    );
}

export default ContactUsCard;