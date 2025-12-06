import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import BackgroundClouds from "@/components/ui/BackgroundClouds";
import SimpleStars from "@/components/ui/SimpleStars";
import Navigation from "@/components/layout/Navigation";
import MouseTrail from "@/components/ui/MouseTrail";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nathan Ramelet | Ingénieur généraliste en électronique/informatique",
  description: "Portfolio de Nathan Ramelet - Ingénieur généraliste en electronique/informatique, passionné par la création d'expériences web immersives et innovantes.",
  keywords: ["Nathan Ramelet", "Full Stack", "Developer", "Portfolio", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Nathan Ramelet" }],
  openGraph: {
    title: "Nathan Ramelet | Ingénieur généraliste en électronique/informatique",
    description: "Portfolio de Nathan Ramelet - Ingénieur généraliste en électronique/informatique",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        {/* Background Clouds - Arrière-plan */}
        <BackgroundClouds />
        
        {/* Simple 2D Stars - Canvas performant */}
        <SimpleStars />
        
        {/* Mouse Trail Effect - Violet/Bleu */}
        <MouseTrail />
        
        {/* Navigation - Top Bar */}
        <Navigation />
        
        {/* Main Content - Scrollable with proper z-index */}
        <main className="relative z-20 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

