import { useEffect, useRef, useState } from "react";
import "./styles.css";

function PageContainer({ toggleNav }) {
    const [currentPage, setCurrentPage] = useState(0);
    const [internalPage, setInternalPage] = useState(0);

    const pageBg = ["bg-red-700", " bg-purple-600", " bg-slate-700"];

    useEffect(() => {
        if (internalPage === currentPage) return;

        const page = document.querySelector("#something");
        page.classList.remove("visible");

        setTimeout(() => {
            setInternalPage(currentPage);
        }, 500);
    }, [currentPage]);

    useEffect(() => {
        const page = document.querySelector("#something");
        page.classList.add("visible");
    }, [internalPage]);

    return (
        <div className={`page ${pageBg[internalPage]} visible`} id="something">
            <button
                onClick={() =>
                    setCurrentPage((currentPage + 1) % pageBg.length)
                }
            >
                page {internalPage}
            </button>
            <button onClick={toggleNav}>page {internalPage}</button>
        </div>
    );
}

export default PageContainer;
