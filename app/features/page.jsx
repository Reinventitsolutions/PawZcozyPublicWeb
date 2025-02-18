import React from "react";
import image from "@/public/images/phone_frame.png";
import Image from "next/image";

export default function page() {
    return (
        <div className="flex extra-large:w-3/4 large:w-4/5 items-stretch justify-center h-max gap-4">
            <div className="w-1/2 flex-1 p-8 rounded-3xl bg-surface-surfaceContainerLowest flex flex-col gap-8">
                <div className="text-surface-foreground text-5xl">
                    Unleashing the Best Features!
                </div>
                <div className="text-utils-outline text-md">
                    "Explore the features that make Pawzcozy the ultimate social
                    platform for pets and their owners!"
                </div>

                <div className="flex ">
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-4">

                      <div className="flex gap-2">
                        <div className="h-6 w-8 bg-primary rounded-md items-center justify-center"></div>
                          <div className="flex flex-col bg-surface-surfaceContainer rounded-medium p-4">
                            <div className="font-bold text-surface-foreground">Pet Profiles</div>
                            <div className="text-utils-outline">Create unique profiles for each of your
                                        pets, complete with photos, bios, and
                                        fun details like favorite toys or
                                        activities!</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="h-6 w-8 bg-primary rounded-md items-center justify-center invisible"></div>
                          <div className="flex flex-col bg-surface-surfaceContainerLow rounded-medium p-4">
                            <div className="font-bold text-surface-foreground">Pet Profiles</div>
                            <div className="text-utils-outline">Create unique profiles for each of your
                                        pets, complete with photos, bios, and
                                        fun details like favorite toys or
                                        activities!</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="h-6 w-8 bg-primary rounded-md items-center justify-center invisible"></div>
                          <div className="flex flex-col bg-surface-surfaceContainerLow rounded-medium p-4">
                            <div className="font-bold text-surface-foreground">Pet Profiles</div>
                            <div className="text-utils-outline">Create unique profiles for each of your
                                        pets, complete with photos, bios, and
                                        fun details like favorite toys or
                                        activities!</div>
                        </div>
                      </div>

                        
                    </div>
                  </div>

                  <div className="flex flex-col">
                  <div className="flex flex-col gap-4">

                  <div className="flex gap-2">
                        <div className="h-6 w-8 bg-primary rounded-md items-center justify-center invisible"></div>
                          <div className="flex flex-col bg-surface-surfaceContainerLow rounded-medium p-4">
                            <div className="font-bold text-surface-foreground">Pet Profiles</div>
                            <div className="text-utils-outline">Create unique profiles for each of your
                                        pets, complete with photos, bios, and
                                        fun details like favorite toys or
                                        activities!</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="h-6 w-8 bg-primary rounded-md items-center justify-center invisible"></div>
                          <div className="flex flex-col bg-surface-surfaceContainerLow rounded-medium p-4">
                            <div className="font-bold text-surface-foreground">Pet Profiles</div>
                            <div className="text-utils-outline">Create unique profiles for each of your
                                        pets, complete with photos, bios, and
                                        fun details like favorite toys or
                                        activities!</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="h-6 w-8 bg-primary rounded-md items-center justify-center invisible"></div>
                          <div className="flex flex-col bg-surface-surfaceContainerLow rounded-medium p-4">
                            <div className="font-bold text-surface-foreground">Pet Profiles</div>
                            <div className="text-utils-outline">Create unique profiles for each of your
                                        pets, complete with photos, bios, and
                                        fun details like favorite toys or
                                        activities!</div>
                        </div>
                      </div>

                      
                    </div>

                  </div>
                </div>
             
            </div>

            <div>
              <Image alt="phone_image" width={350} height={850} src={image}></Image>
            </div>
        </div>
    );
}
