import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/ui/MotionProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Codenest Web Studios",
    template: "%s — Codenest Web Studios",
  },
  description:
    "We build websites, mobile apps, and custom software for ambitious businesses.",
  metadataBase: new URL("https://codenestwebstudios.com"),
  openGraph: {
    type: "website",
    siteName: "Codenest Web Studios",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${bricolage.variable}`}>
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
