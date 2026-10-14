import type { Metadata } from "next";
import { cookies } from "next/headers";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import BackgroundGrid from "@/components/BackgroundGrid";

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omkar Panda",
  description: "Portfolio of Omkar Panda",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = (await cookies()).get("theme")?.value === "dark" ? "dark" : "light";

  return (
    <html
      lang="en"
      className={`${plexMono.variable} ${theme === "dark" ? "dark" : ""} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BackgroundGrid>{children}</BackgroundGrid>
      </body>
    </html>
  );
}
