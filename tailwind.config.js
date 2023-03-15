/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                200: "200px",
            },
            fontSize: {
                8: "8px",
            },
            fontFamily: {
                monument: "Monument",
            },
        },
    },
    plugins: [],
};
