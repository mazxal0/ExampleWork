import type { Metadata } from "next";
import "../../styles/global.scss";

export const metadata: Metadata = {
  title: "Cyberzone UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#000000" }}>{children}</body>
    </html>
  );
}
