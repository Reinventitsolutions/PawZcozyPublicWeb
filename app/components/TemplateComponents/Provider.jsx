'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Provider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div />;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      value={{
        light: 'light',
        dark: 'dark',
      }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
