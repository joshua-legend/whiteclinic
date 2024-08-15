import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import "../styles/global.css";

export const metadata = {
  title: "Your App Title",
  description: "Your App Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ display: "flex" }}>
            {/* <Sidebar />  */}
            <main style={{ flexGrow: 1 }}>
              {children} {/* 페이지의 콘텐츠 */}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
