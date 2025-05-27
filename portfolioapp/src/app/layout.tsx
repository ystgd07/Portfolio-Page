import type React from "react";
import "@/app/globals.css";
import { Toaster } from 'sonner';
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import BackToTopButton from "@/components/BackToTopButton";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "양성수 | 프론트엔드 포트폴리오",
  description: "양성수 | 프론트엔드 포트폴리오",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-center" richColors />
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
