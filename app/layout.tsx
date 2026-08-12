import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import BackgroundGrid from "@/components/BackgroundGrid";
import { ThemeProvider } from "@/components/ThemeProvider";

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omkar Panda",
  description: "Portfolio of Omkar Panda",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plexMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark")}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <BackgroundGrid>{children}</BackgroundGrid>
        </ThemeProvider>
      </body>
    </html>
  );
}
