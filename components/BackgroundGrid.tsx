"use client";

import type { ReactNode } from "react";
import { useTheme } from "./ThemeProvider";

const BackgroundGrid = ({ children }: { children: ReactNode }) => {
  const { isDark } = useTheme();

  return (
    <div className="relative min-h-screen w-full">
      {isDark ? (
        <div
          aria-hidden
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: "#000000",
            backgroundImage: `
              linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 z-0 bg-white"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      )}
      {children}
    </div>
  );
};

export default BackgroundGrid;
