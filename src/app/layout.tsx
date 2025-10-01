import { FC } from "react";

import { geistMono, geistSans } from "@/config";

import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "তাওয়াক্কুল এগ্রো - খাঁটি হালাল দুধ",
  description: "তাওয়াক্কুল এগ্রো থেকে খাঁটি হালাল দুধ অর্ডার করুন। ফার্ম ফ্রেশ, পিউর মিল্ক।",
};

type TProps = Readonly<IChildren>;
const RootLayout: FC<TProps> = ({ children }) => (
  <html lang="bn">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
  </html>
);

export default RootLayout;
