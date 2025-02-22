"use client";

import React, { useState } from "react";
import Image from "next/image";
import profile1 from "@/public/images/001.jpg";
import profile2 from "@/public/images/002.jpg";
import profile3 from "@/public/images/003.jpg";
import profile4 from "@/public/images/004.jpg";
import profile5 from "@/public/images/005.jpg";
import profile6 from "@/public/images/006.jpg";
import profile7 from "@/public/images/007.jpg";
import profile8 from "@/public/images/008.jpg";
import profile9 from "@/public/images/009.jpg";
import profile10 from "@/public/images/010.jpg";
import profile11 from "@/public/images/011.jpg";
import { AndroidMockup } from "react-device-mockup";

const profiles = [
    {
        id: 1,
        title: "Pet Profiles",
        description: [
            "Users can create detailed profiles for their pets, including names, breeds, birthdays, favorite activities, and fun facts.",
            "Profile verification for pet influencers and businesses.",
        ],
        image: profile1,
    },
    {
        id: 2,
        title: "Pet Feed & Stories",
        description: [
            "A scrollable feed with photos, videos, and updates from other pets.",
            "Temporary “Pet Stories” that disappear after 24 hours.",
        ],
        image: profile2,
    },
    {
        id: 3,
        title: "Pet Matchmaking & Friendships",
        description: [
            "Connect pets with similar interests, breeds, or nearby locations.",
            "Friend request system to follow and interact with other pets.",
        ],
        image: profile3,
    },
    {
        id: 4,
        title: "Pet Challenges & Contests",
        description: [
            "Users can participate in or create themed challenges (e.g., cutest costume, best trick, funniest pose).",
            "Voting system with badges and rewards.",
        ],
        image: profile4,
    },
    {
        id: 5,
        title: "Paw Prints (Reactions & Comments)",
        description: [
            "Like, comment, and share posts using fun pet-themed reactions (e.g., paw prints, bones, meows).",
            "GIFs, stickers, and emojis for engagement.",
        ],
        image: profile5,
    },
    {
        id: 6,
        title: "Pet Marketplace & Services",
        description: [
            "A marketplace for pet products, accessories, and services (grooming, vets, pet sitters, trainers).",
            "Special offers from pet brands and businesses.",
        ],
        image: profile6,
    },
    {
        id: 7,
        title: "Pet Wellness Advice Section",
        description: ["Share Pet wellness Tips"],
        image: profile7,
    },
    {
        id: 8,
        title: "PawZCozy Community & Groups",
        description: [
            "Pet owner groups based on breed, interests, or local meetups.",
            "Forums for advice on pet care, adoption, and training.",
        ],
        image: profile8,
    },
    {
        id: 9,
        title: "Pet-Friendly Locations & Events",
        description: [
            "Interactive map of pet-friendly parks, cafés, hotels, and events.",
            "Event listings for pet meetups, training sessions, and adoption fairs.",
        ],
        image: profile9,
    },
    {
        id: 10,
        title: "Lost & Found Pets",
        description: [
            "A dedicated section to report and locate missing pets.",
            "AI-powered pet recognition to help identify lost pets.",
        ],
        image: profile10,
    },
    {
        id: 11,
        title: "Premium Membership (PawZCozy VIP)",
        description: [
            "Exclusive stickers, filters, and badges.",
            "Early access to contests and special features.",
        ],
        image: profile11,
    },
];

export default function FeaturesPage() {
    const [activeProfile, setActiveProfile] = useState(1);

    return (
        <div className="w-full flex flex-col compact:flex-col medium:flex-col expanded:flex-row large:flex-row extra-large:flex-row items-stretch justify-between h-max gap-4 p-4">
            <div className="extra-large:w-3/4 flex-1 p-8 rounded-3xl bg-surface-surfaceContainerLowest flex flex-col gap-8 ">
                <div className="text-surface-foreground text-5xl">
                    Unleashing the Best Features!
                </div>
                <div className="text-utils-outline text-md">
                    "Explore the features that make Pawzcozy the ultimate social
                    platform for pets and their owners!"
                </div>
                <div className="grid grid-cols-1 compact:grid-cols-1 compact:space-y-6 medium:grid-cols-2 expanded:grid-cols-2 large:grid-cols-2 extra-large:grid-cols-3 gap-4">
                    {profiles.map((profile) => (
                        <div
                            key={profile.id}
                            className="flex gap-2 cursor-pointer items-center"
                            onClick={() => setActiveProfile(profile.id)}
                        >
                            <div
                                className={`h-6 w-6 rounded-md transition-all duration-300 flex items-center justify-center ${
                                    activeProfile === profile.id
                                        ? "bg-primary"
                                        : "bg-gray-300"
                                }`}
                            ></div>
                            <div
                                className={`flex flex-col p-4 rounded-medium transition-all duration-300 w-full h-full ${
                                    activeProfile === profile.id
                                        ? "bg-surface-surfaceContainer shadow-lg"
                                        : "bg-surface-surfaceContainerLow"
                                }`}
                            >
                                <div className="font-bold text-surface-foreground">
                                    {profile.title}
                                </div>
                                <ul className="text-utils-outline list-disc pl-5">
                                    {profile.description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-center w-full compact:w-full medium:w-full expanded:w-1/3 large:w-1/4 extra-large:w-1/4">

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
