"use client";

import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import NavBar from "../NavbarComponents/NavBar";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
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
            <div className="flex items-center h-full gap-3">
                <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center">
                    <Image src={'/logos/logo.png'} width={'40'} height={'40'} alt="logo" />
                </div>
                <div className="text-2xl text-surface-foreground">PawZcozy</div>
            </div>
            <div className="w-full max-w-[500px] flex items-center justify-center">
                <NavBar />
            </div>
            <div className="flex items-center gap-3">
                <ThemeSwitcher />
                {/* <Button
          variant="bordered"
          color="primary"
          radius="full"
          size="lg"
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
          }
        >
          Contact
        </Button> */}
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
                            className="size-6"
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
        </div>
    );
}
