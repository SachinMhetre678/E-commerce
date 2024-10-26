// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css"; // Update this path to point to your CSS file

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
});

export const metadata: Metadata = {
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
      <body className={geistSans.className}>{children}</body>
    </html>
  );
}
