import { useEffect, useRef, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/carousel-arrow.svg";

const Carousel = ({ clients }) => {
    const itemsRef = useRef({});

    const step = 1;

    const showingIndex = useRef(0);
    const [reset, setReset] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const nextIndex = (showingIndex.current + step) % clients.length;
            showingIndex.current = nextIndex;
            itemsRef.current?.[showingIndex.current]?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }, [1000]);
        return () => {
            clearInterval(timer);
        };
    }, [reset]);

    const onNextClick = () => {
        const nextIndex = (showingIndex.current + step) % clients.length;
        showingIndex.current = nextIndex;
        itemsRef.current?.[showingIndex.current]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        setReset(reset + 1);
    };

    const onPrevClick = () => {
        const prevIndex =
            showingIndex.current === 0
                ? clients.length - 1
                : showingIndex.current - 1;
        showingIndex.current = prevIndex;
        itemsRef.current?.[showingIndex.current]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        setReset(reset + 1);
    };

    return (
        <div className=" flex flex-1 gap-5 items-center select-none">
            <Arrow
                className="w-12 sm:w-20 cursor-pointer transition-all hover:scale-110 transform"
                onClick={onPrevClick}
            />
            <div className=" flex-1 flex sm:gap-20 gap-8 items-center overflow-x-scroll carousel">
                {clients.map(({ name, image }, index) => (
                    <img
                        src={image}
                        alt={name}
                        key={index}
                        ref={(ref) => {
                            itemsRef.current[index - 1] = ref;
                        }}
                        className=" sm:h-40 h-32"
                    />
                ))}
            </div>
            <Arrow
                className="w-12 sm:w-20 rotate-180 cursor-pointer transition-all hover:scale-110 transform"
                onClick={onNextClick}
            />
        </div>
    );
};

export default Carousel;
