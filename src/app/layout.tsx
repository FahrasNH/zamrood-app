import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientProviders from "./clientProviders";
import { Theme } from "@radix-ui/themes";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/effect-fade'
import '@radix-ui/themes/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zamrood by Pandooin",
  description: "Premium Travel Experiences in Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          <Theme>
            {children}
          </Theme>
        </ClientProviders>
      </body>
    </html>
  );
}
