import type { Metadata } from "next";
import "@/styles/globals.css";
import AuthProvider from "@/components/shared/AuthProvider";
import { spaceGrotesk } from "@/lib/fonts";
import { QueryProvider } from "@/lib/query/query-provider";
import { Toaster } from "@/components/ui/toaster";

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
        className={`antialiased ${spaceGrotesk.className}`}
      >
        <AuthProvider>
          <QueryProvider>{children}</QueryProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
