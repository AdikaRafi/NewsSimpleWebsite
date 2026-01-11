// src/providers.tsx
'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // attribute="class" is a important part to detect dark mode
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}