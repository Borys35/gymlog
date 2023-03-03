import "@/styles/global.css";

import { Metadata } from "next";
import { notoSans } from "./fonts";

export const metadata: Metadata = {
  title: "GymLog",
  description: "Log your gym progress.",
  keywords: ["gym", "logging"],
  icons: ["/favicon.ico"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSans.className}>
      <body>{children}</body>
    </html>
  );
}
