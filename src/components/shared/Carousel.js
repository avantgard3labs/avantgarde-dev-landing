import { useEffect, useRef } from "react";
import { ReactComponent as Arrow } from "../../assets/carousel-arrow.svg";

const Carousel = () => {
    const itemsRef = useRef({});

    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    const showingIndex = useRef(0);

    useEffect(() => {
        const timer = setInterval(() => {
            itemsRef.current?.[showingIndex.current]?.classList.remove(
                "bg-red-800"
            );
            itemsRef.current?.[showingIndex.current]?.classList.add(
                "bg-green-800"
            );
            showingIndex.current = (showingIndex.current + 1) % arr.length;
            itemsRef.current?.[showingIndex.current]?.classList.add(
                "bg-red-800"
            );

            itemsRef.current?.[showingIndex.current]?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }, [1000]);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className=" flex flex-1 gap-5 items-center ">
            <Arrow className="w-20" />
            <div className=" flex-1 flex gap-20 items-center overflow-x-scroll carousel">
                {arr.map((index) => (
                    <div
                        key={index}
                        ref={(ref) => {
                            itemsRef.current[index - 1] = ref;
                        }}
                        style={{
                            minWidth: 160,
                        }}
                        className="  w-40 h-40 bg-green-800"
                    ></div>
                ))}
            </div>
            <Arrow className="w-20 rotate-180" />
        </div>
    );
};

export default Carousel;
