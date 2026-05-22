import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Replai — Email and calendar, on autopilot.",
  description:
    "Replai is your AI executive assistant. It reads your inbox, drafts replies, extracts tasks, and schedules your week — automatically.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ theme: shadcn }}>
      <html lang="en">
        <body className={`${montserrat.className} antialiased`}>
          {children}
          <footer className="footer-wrapper">
            <div className="section-heading">
              <p className="text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Replai.
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
