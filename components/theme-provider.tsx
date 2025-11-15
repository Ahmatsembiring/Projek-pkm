'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class" // ⬅️ WAJIB: pakai class "dark"
      defaultTheme="light" // opsional, biar awalnya light
      enableSystem={false} // opsional, kalau nggak mau ikut system
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
