import ThemeProviderWrapper from "@/providers/themeProvider";
import React from "react";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProviderWrapper>{children}</ThemeProviderWrapper>;
};
