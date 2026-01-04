"use client";
import "./globals.css";
import { useState, useLayoutEffect } from "react";
// Mui Components
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "@/theme/theme";
// Layout Components
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import UpBtn from "@/global/upBtn";

declare module "@mui/material/styles" {
  interface TypeText {
    darkPink: string;
    greenDegree: string;
    purpleDegree: string;
  }
  interface TypeBackground {
    default: string;
    paper: string;
    block: string;
    btn: string;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme(getDesignTokens());
  const [showContent, setShowContent] = useState(false);
  useLayoutEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/DATA-Container-100/hotel-cdn-imgs/main/uploads/z_v2_v.webp"
          type="image/x-icon"
        />
        <title>ZAHRA</title>
        <meta
          name="description"
          content="ZAHRA Real-Estate App By Ahmed Adel"
        />
      </head>
      <body style={{ backgroundColor: "#fff5f7" }}>
        <>
          <ThemeProvider theme={theme}>
            {showContent && (
              <>
                <Header />
                {children}
                <UpBtn />
                <Footer />
              </>
            )}
          </ThemeProvider>
        </>
      </body>
    </html>
  );
}
