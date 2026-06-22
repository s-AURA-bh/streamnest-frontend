import type { Metadata } from "next";
import "./globals.css";
import { RootChrome } from "@/components/root-chrome";

export const metadata: Metadata = {
  title: {
    default: "AURA | Saurabh Yadav",
    template: "%s | AURA"
  },
  description:
    "AURA is the personal digital identity and creative ecosystem of Saurabh Yadav.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <RootChrome>{children}</RootChrome>
      </body>
    </html>
  );
}
