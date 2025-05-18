import ThemeProviderWrapper from "@/provdiers/themeProvider";
import React from "react";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProviderWrapper>{children}</ThemeProviderWrapper>;
};
