import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Disney Plus Clone",
  description: "For Educational Purposes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
