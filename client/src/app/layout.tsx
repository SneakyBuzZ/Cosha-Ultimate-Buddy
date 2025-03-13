import type { Metadata } from "next";
import "@/styles/globals.css";
import AuthProvider from "@/components/shared/AuthProvider";
import { splineSans } from "@/lib/fonts";
import { QueryProvider } from "@/lib/query/query-provider";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/shared/ThemProvider";

export const metadata: Metadata = {
  title: "Cosha",
  description: "Cosha is a github repo explorer",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/logo.svg" sizes="any" />
      </head>
      <body
        style={{ letterSpacing: "-0.05" }}
        className={`antialiased ${splineSans.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <QueryProvider>{children}</QueryProvider>
          </AuthProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
