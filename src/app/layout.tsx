import "./globals.css";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata = {
  title: "Youseif Elshreif",
  description: "Portfolio of Youseif Elshreif",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="dKLb8jPJ6_JKC_18Vq2m3ELdHkiTYVM5Jwr8iVkPwmQ"
        />
      </head>
      <body className={`${inter.variable} ${ibmPlexSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
