import type { ReactNode } from "react";

const BackgroundGrid = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full">
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-white dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-0 hidden bg-black dark:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {children}
    </div>
  );
};

export default BackgroundGrid;
