import { useEffect, useRef, useState } from "react";

function PageContainer() {
    const [currentPage, setCurrentPage] = useState(0);
    const [internalPage, setInternalPage] = useState(0);

    useEffect(() => {
        if (currentPage === internalPage) {
            const page1 = document.querySelector("#page-1");
            page1?.classList.add("fade-in");
            return;
        }
        const page1 = document.querySelector("#page-1");
        page1?.classList.remove("fade-in");
        page1.classList.add("fade-out");
        setTimeout(() => {
            setInternalPage(currentPage);
        }, 500);
    }, [currentPage]);

    useEffect(() => {
        setTimeout(() => {
            const page2 = document.querySelector("#page-2");
            page2?.classList.add("fade-in");
        }, 100);
    }, [internalPage]);

    const getPage = () => {
        if (internalPage === 0) {
            return (
                <div className="page " key={1} id="page-1">
                    <h1>Section 1</h1>
                    <p>This is section 1.</p>
                    <button onClick={() => setCurrentPage(1)}>
                        Go to section 2
                    </button>
                </div>
            );
        } else {
            return (
                <div className="page" key={2} id="page-2">
                    <h1>Section 2</h1>
                    <p>This is section 2.</p>
                    <button onClick={() => setCurrentPage(0)}>
                        Go to section 1
                    </button>
                </div>
            );
        }
    };

    return <div>{getPage()}</div>;
}

export default PageContainer;
