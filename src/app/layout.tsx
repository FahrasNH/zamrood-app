import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientProviders from "./clientProviders";
import { Theme } from "@radix-ui/themes";

import "./globals.css";
import '@radix-ui/themes/styles.css';
import PublicLayout from "@/components/templates/publicLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
            <PublicLayout>
              {children}
            </PublicLayout>
          </Theme>
        </ClientProviders>
      </body>
    </html>
  );
}
