import type { Metadata } from "next";
import "@astryxdesign/core/astryx.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "CPP-Pal — Learn C++ by writing it",
  description: "A friendly, hands-on place to learn modern C++.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
