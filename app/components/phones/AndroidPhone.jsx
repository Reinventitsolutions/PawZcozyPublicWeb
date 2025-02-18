"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AndroidMockup } from "react-device-mockup";
import { Image } from "@nextui-org/react";

export default function AndroidPhone() {

  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const activeTheme = theme === "system" ? systemTheme : theme;

  return <AndroidMockup screenWidth={200} frameColor={activeTheme === 'light' ? "#2E3135" : "#43474E"} frameOnly hideStatusBar hideNavBar>
    <Image src={activeTheme === 'light' ? "/images/app_screen_light.jpg" : "/images/app_screen_dark.jpg"} />
  </AndroidMockup>;
}
