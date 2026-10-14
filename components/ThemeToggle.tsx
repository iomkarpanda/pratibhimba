"use client";

import { useSyncExternalStore } from "react";

const subscribeToTheme = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
};

const getThemeSnapshot = () =>
  document.documentElement.classList.contains("dark");

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    () => false
  );

  return (
    <button
      type="button"
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => {
        const nextIsDark = !isDark;
        document.cookie = `theme=${nextIsDark ? "dark" : "light"}; Path=/; Max-Age=31536000; SameSite=Lax`;
        document.documentElement.classList.toggle("dark", nextIsDark);
      }}
      className={`ml-auto flex h-5 w-9 cursor-pointer items-center rounded-full border transition-colors ${
        isDark
          ? "border-white/10 bg-neutral-900"
          : "border-black/15 bg-neutral-200"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-4 w-4 rounded-full border transition-transform duration-300 ease-in-out ${
        isDark
          ? "translate-x-4 border-white/15 bg-neutral-700"
          : "translate-x-0 border-black/20 bg-neutral-500"
        }`}
      />
    </button>
  );
}
