"use client";

import { ReactNode } from "react";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyles from "./GlobalStyle";

export const theme: DefaultTheme = {
   colors: {
      blue: "#1C449C",
      bw1: "#fff",
      bw2: "#f5f5f5",
      bw3: "#d1d1d1",
      bw4: "#a2a2a2",
      bw5: "#747474",
      bw6: "#454545",
      bw7: "#2d2d2d",
      bw8: "#161616",
   },
   fonts: {
      roboto: {
         fontFamily: "--Roboto, sans-serif",
         regular: "400",
         bold: "700",
      },
   },
   others: {
      shadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
      hover: "rgba(0, 0, 0, 0.05)",
   },
};

export default function ClientLayout({ children }: { children: ReactNode }) {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         {children}
      </ThemeProvider>
   );
}
