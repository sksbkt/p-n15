import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import NavBar from "@/app/_components/nav-bar/page";
import { AppProvider } from "@/providers";

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
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <AppProvider>
            <NavBar />
            {children}
          </AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
