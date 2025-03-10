"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AndroidMockup } from "react-device-mockup";

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

  return (
    <AndroidMockup
      screenWidth={200}
      frameColor={activeTheme === "light" ? "#2E3135" : "#43474E"}
      frameOnly
      hideStatusBar
      hideNavBar
    >
      {/* Embed Google Ad Script here */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7596111115934322"
        crossorigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7596111115934322"
        data-ad-slot="your-ad-slot-id"
        data-ad-format="auto"
      ></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </AndroidMockup>
  );
}
