import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Suspense } from "react";
import LoadingPage from "@/app/loading";
import NavBar from "@/app/_components/nav-bar/page";
import { AppProvider } from "@/provdiers";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ali khoshbakht portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // context provider
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased flex items-center justify-center`}
      // className="flex justify-center items-center bg-yellow-300"
      >
        <AppRouterCacheProvider>
          <AppProvider>
            <Suspense fallback={<LoadingPage />}>
              <NavBar />
              {children}
            </Suspense>
          </AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
