"use client";

import React, { useEffect, useRef, useState } from "react";
import TestimonialsCard from "./TestimonialsCard";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Button } from "@nextui-org/button";

export default function Testimonials() {
    const scrollContainerRef = useRef(null);
    const [isLeftDisabled, setIsLeftDisabled] = useState(true);
    const [isRightDisabled, setIsRightDisabled] = useState(false);

    const updateButtonState = () => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

            setIsLeftDisabled(scrollLeft <= 0);
            setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            updateButtonState();
            scrollContainer.addEventListener("scroll", updateButtonState);
            return () =>
                scrollContainer.removeEventListener(
                    "scroll",
                    updateButtonState
                );
        }
    }, []);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -345,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 345,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="w-4/5 flex gap-10 items-start justify-start py-20">
            <div className="min-h-[350px] w-[325px] flex flex-col gap-3 justify-between pb-10">
                <div className="flex flex-col w-full">
                    <div className="text-5xl w-full text-surface-foreground">
                        Already downloaded?
                    </div>
                    <div className="text-md w-full text-surface-foreground">
                        Learn more about what you can do on PawZcozy.
                    </div>
                </div>
                <div className="w-full flex items-center justify-start gap-5">
                    <Button
                        isIconOnly
                        color="primary"
                        variant="solid"
                        radius="full"
                        onPress={() => scrollLeft()}
                        isDisabled={isLeftDisabled}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                    <Button
                        isIconOnly
                        color="primary"
                        variant="solid"
                        radius="full"
                        onPress={() => scrollRight()}
                        isDisabled={isRightDisabled}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </div>
            </div>
            <ScrollShadow
                orientation="horizontal"
                className="h-full flex gap-[20px] pr-[20px]"
                hideScrollBar
                ref={scrollContainerRef}
            >
                <TestimonialsCard
                    image={"/images/review_2.jpg"}
                    name={"Samantha R."}
                    desc={
                        "PawZcozy has transformed our weekends! Winning last month’s ‘Best Trick’ contest was a highlight for my pup, Milo!"
                    }
                />
                <TestimonialsCard
                    image={"/images/review_1.jpg"}
                    name={"Jordan K."}
                    desc={
                        "As a pet sitter, PawZcozy is invaluable. It’s great for connecting with the pet community and the contests are a delightful bonus!"
                    }
                />
                <TestimonialsCard
                    image={"/images/review_3.jpg"}
                    name={"Alex J."}
                    desc={
                        "I love this app! The community groups are supportive, and the contests add a fun challenge for showcasing our pets."
                    }
                />
                <TestimonialsCard
                    image={"/images/review_1.jpg"}
                    name={"Emily Johnson"}
                    desc={
                        "Lorem dlkvdvids ejvd nmdhcods  9poj;fsdo;vjs dscieod"
                    }
                />
                <TestimonialsCard
                    image={"/images/review_2.jpg"}
                    name={"Emily Johnson"}
                    desc={
                        "Lorem dlkvdvids ejvd nmdhcods  9poj;fsdo;vjs dscieod Lorem dlkvdvids ejvd nmdhcods  9poj;fsdo;vjs dscieod Lorem dlkvdvids ejvd nmdhcods  9poj;fsdo;vjs dscieod Lorem dlkvdvids ejvd nmdhcods  9poj;fsdo;vjs dscieod Lorem dlkvdvids ejvd nmdhcods  9poj;fsdo;vjs dscieod"
                    }
                />
                {/* <div className="w-[20px] h-[20px] opacity-0">vdavnd</div> */}
            </ScrollShadow>
        </div>
    );
}
