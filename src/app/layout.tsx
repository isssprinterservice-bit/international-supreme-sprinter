import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "International Supreme Sprinters | Atlanta Luxury Transportation",
    template: "%s | International Supreme Sprinters",
  },
  description:
    "Private luxury Sprinter transportation in Atlanta for birthdays, weddings, airport transfers, corporate travel, concerts, sporting events, trips and special occasions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
