"use client";

import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import NavBar from "../NavbarComponents/NavBar";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function Header() {
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);

    const isHiddenRoute = pathname === "/eula" || pathname === "/policy";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isCompact = useMediaQuery({ maxWidth: 599 });
    const isMedium = useMediaQuery({ minWidth: 600, maxWidth: 839 });
    return isCompact || isMedium ? (
        <div
            className={`w-full h-[110px] z-50 sticky top-0 left-0 right-0 flex-col px-8 space-y-3 ${
                isScrolled
                    ? pathname === "/"
                        ? "bg-surface-surfaceContainer/70 backdrop-blur-md border-b-1 border-utils-outlineVariant"
                        : "bg-surface/70 backdrop-blur-md border-b-1 border-utils-outlineVariant"
                    : pathname === "/"
                    ? "bg-surface-surfaceContainer"
                    : "bg-surface"
            }`}
        >
            <div className="w-full flex items-center justify-between mt-3">
                <Link href="/" className="flex items-center h-full gap-3 ">
                    <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center compact:w-[30px] compact:h-[30px]">
                        <Image
                            src={"/logos/logo.png"}
                            width={"40"}
                            height={"40"}
                            alt="logo"
                        />
                    </div>
                    <div className="text-2xl text-surface-foreground">
                        PawZcozy
                    </div>
                </Link>
                {!isHiddenRoute && (
                    <div className="flex items-center gap-3 ">
                        <ThemeSwitcher />

                        <Button
                            variant="solid"
                            isIconOnly
                            color="primary"
                            radius="full"
                            size="md"
                        >
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-6 compact:size-4"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                        </Button>
                    </div>
                )}
            </div>
            <div className="w-full max-w-[500px] flex items-center justify-center">
                <NavBar />
            </div>
        </div>
    ) : (
        <div
            className={`w-full h-[80px] z-50 sticky top-0 left-0 right-0 flex items-center justify-between px-8 ${
                isScrolled
                    ? pathname === "/"
                        ? "bg-surface-surfaceContainer/70 backdrop-blur-md border-b-1 border-utils-outlineVariant"
                        : "bg-surface/70 backdrop-blur-md border-b-1 border-utils-outlineVariant"
                    : pathname === "/"
                    ? "bg-surface-surfaceContainer"
                    : "bg-surface"
            }`}
        >
            <Link href="/" className="flex items-center h-full gap-3 ">
                <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center compact:w-[30px] compact:h-[30px]">
                    <Image
                        src={"/logos/logo.png"}
                        width={"40"}
                        height={"40"}
                        alt="logo"
                    />
                </div>
                <div className="text-2xl text-surface-foreground">PawZcozy</div>
            </Link>
            <div className="w-full max-w-[500px] flex items-center justify-center ">
                <NavBar />
            </div>
            {!isHiddenRoute && (
                <div className="flex items-center gap-3 ">
                    <ThemeSwitcher />

                    <Button
                        variant="solid"
                        color="primary"
                        radius="full"
                        size="lg"
                        startContent={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6 compact:size-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        }
                    >
                        Download
                    </Button>
                </div>
            )}
        </div>
    );
}
