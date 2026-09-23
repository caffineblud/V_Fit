import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VR-FIT",
  description: "A spatial exercise reference — every movement, every machine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">{children}</body>
    </html>
  );
}
