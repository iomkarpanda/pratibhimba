"use client";

import type { KeyboardEvent } from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();


  return (
    <div
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      tabIndex={0}
      onClick={toggleTheme}
      className={`ml-auto flex h-5 w-9 cursor-pointer items-center rounded-full border transition-colors ${
        isDark
          ? "border-white/10 bg-neutral-900"
          : "border-black/15 bg-neutral-200"
      }`}
    >
      <div
        aria-hidden="true"
        className={`h-4 w-4 rounded-full border transition-transform duration-300 ease-in-out ${
          isDark
            ? "translate-x-4 border-white/15 bg-neutral-700"
            : "translate-x-0 border-black/20 bg-neutral-500"
        }`}
      />
    </div>
  );
}
