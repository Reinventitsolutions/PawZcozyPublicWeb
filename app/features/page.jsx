"use client";

import React, { useState } from "react";
import Image from "next/image";
import profile1 from "@/public/images/001.jpg";
import profile2 from "@/public/images/002.jpg";
import profile3 from "@/public/images/003.jpg";
import profile4 from "@/public/images/004.jpg";
import profile5 from "@/public/images/005.jpg";
import profile6 from "@/public/images/006.jpg";
import { AndroidMockup } from "react-device-mockup";

const profiles = [
    {
        id: 1,
        title: "Pet Profiles",
        description:
            "Create unique profiles for each of your pets, complete with photos, bios, and fun details like favorite toys or activities!",
        image: profile1,
    },
    {
        id: 2,
        title: "Pet Profiles",
        description:
            "Create unique profiles for each of your pets, complete with photos, bios, and fun details like favorite toys or activities!",
        image: profile2,
    },
    {
        id: 3,
        title: "Pet Profiles",
        description:
            "Create unique profiles for each of your pets, complete with photos, bios, and fun details like favorite toys or activities!",
        image: profile3,
    },
    {
        id: 4,
        title: "Pet Profiles",
        description:
            "Create unique profiles for each of your pets, complete with photos, bios, and fun details like favorite toys or activities!",
        image: profile4,
    },
    {
        id: 5,
        title: "Pet Profiles",
        description:
            "Create unique profiles for each of your pets, complete with photos, bios, and fun details like favorite toys or activities!",
        image: profile5,
    },
    {
        id: 6,
        title: "Pet Profiles",
        description:
            "Create unique profiles for each of your pets, complete with photos, bios, and fun details like favorite toys or activities!",
        image: profile6,
    },
];

export default function FeaturesPage() {
    const [activeProfile, setActiveProfile] = useState(1);

    return (

        <div className="flex extra-large:w-3/4 large:w-4/5 items-stretch justify-between h-max gap-4">
            <div className="w-3/4 flex-1 p-8 rounded-3xl bg-surface-surfaceContainerLowest flex flex-col gap-8">
                <div className="text-surface-foreground text-5xl">
                    Unleashing the Best Features!
                </div>
                <div className="text-utils-outline text-md">
                    "Explore the features that make Pawzcozy the ultimate social
                    platform for pets and their owners!"
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {profiles.map((profile) => (
                        <div
                            key={profile.id}
                            className="flex gap-2 cursor-pointer"
                            onClick={() => setActiveProfile(profile.id)}
                        >
                            <div
                                className={`h-6 w-8 rounded-md ${
                                    activeProfile === profile.id
                                        ? "bg-primary"
                                        : "bg-gray-300"
                                }`}
                            ></div>
                            <div
                                className={`flex flex-col p-4 rounded-medium ${
                                    activeProfile === profile.id
                                        ? "bg-surface-surfaceContainer"
                                        : "bg-surface-surfaceContainerLow"
                                }`}
                            >
                                <div className="font-bold text-surface-foreground">
                                    {profile.title}
                                </div>
                                <div className="text-utils-outline">
                                    {profile.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-center w-1/4">
                <AndroidMockup
                    screenWidth={200}
                    frameColor={"#2E3135"}
                    frameOnly
                    hideStatusBar
                    hideNavBar
                >
                    <Image
                        alt="phone_image"
                        width={200}
                        height={300}
                        src={profiles.find((p) => p.id === activeProfile).image}
                        style={{ objectFit: "cover" }}
                    />
                </AndroidMockup>
            </div>
        </div>
    );
}
