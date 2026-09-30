import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import NextAuthSessionProvider from "./provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Home Services App",
  description: "App with NextAuth Credentials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          {/* Page Container */}
          <div className="mx-6 md:mx-16 flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Main content */}
            <main className="flex-1">{children}</main>

            {/* Toast notifications */}
            <Toaster position="top-right" />
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
