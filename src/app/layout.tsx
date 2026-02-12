// import type { Metadata } from "next";
// import { Orbitron, Rajdhani, Fira_Code, Audiowide } from "next/font/google";
// import "./globals.css";
// import { CursorFollower } from "@/components/effects/CursorFollower";
// import { ScrollIndicator } from "@/components/effects/ScrollIndicator";
// import { SEO } from "@/lib/constants";

// // Font configurations
// const orbitron = Orbitron({
//   subsets: ["latin"],
//   variable: "--font-orbitron",
//   display: "swap",
// });

// const rajdhani = Rajdhani({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-rajdhani",
//   display: "swap",
// });

// const firaCode = Fira_Code({
//   subsets: ["latin"],
//   variable: "--font-fira-code",
//   display: "swap",
// });

// const audiowide = Audiowide({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-audiowide",
//   display: "swap",
// });

// // Metadata
// export const metadata: Metadata = {
//   title: SEO.title,
//   description: SEO.description,
//   keywords: SEO.keywords,
//   authors: [{ name: "Your Name" }],
//   creator: "Your Name",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: SEO.openGraph.url,
//     title: SEO.title,
//     description: SEO.description,
//     siteName: SEO.openGraph.siteName,
//     images: SEO.openGraph.images,
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: SEO.title,
//     description: SEO.description,
//     images: SEO.openGraph.images,
//     creator: "@yourusername",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
//   manifest: "/site.webmanifest",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`${orbitron.variable} ${rajdhani.variable} ${firaCode.variable} ${audiowide.variable} antialiased`}
//         suppressHydrationWarning
//       >
//         {/* Custom Cursor */}
//         <CursorFollower />

//         {/* Scroll Progress Indicator */}
//         <ScrollIndicator />

//         {/* Scan lines effect (cyberpunk) */}
//         <div className="scan-lines pointer-events-none fixed inset-0 z-[100] opacity-[0.03]" />

//         {/* Noise overlay */}
//         <div className="noise-overlay pointer-events-none fixed inset-0 z-[99]" />

//         {/* Main Content */}
//         <main className="relative">{children}</main>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter, Playfair_Display, Fira_Code } from "next/font/google";
import "./globals.css";
import { CursorFollower } from "@/components/effects/CursorFollower";
import { ScrollIndicator } from "@/components/effects/ScrollIndicator";
import { SEO } from "@/lib/constants";

// Font configurations - Professional & Elegant
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SEO.openGraph.url,
    title: SEO.title,
    description: SEO.description,
    siteName: SEO.openGraph.siteName,
    images: SEO.openGraph.images,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: SEO.openGraph.images,
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${firaCode.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Custom Cursor */}
        <CursorFollower />

        {/* Scroll Progress Indicator */}
        <ScrollIndicator />

        {/* Main Content */}
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}