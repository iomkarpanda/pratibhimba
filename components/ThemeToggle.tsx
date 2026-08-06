"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="ml-auto flex items-center rounded-sm border border-black/10 px-2.5 py-1 text-xs text-neutral-500 hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 dark:border-white/15 dark:text-neutral-400 dark:hover:bg-white/10"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
