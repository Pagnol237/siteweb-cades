import type { Metadata } from "next";
import '@/style/global.css';
import {Satisfy} from '@next/font/google'

const satisfy = Satisfy({
  subsets: ['latin'],
  variable: '--font-satisfy',
  weight:'400',
  display: 'swap',
})


export const metadata: Metadata = {
  icons: {
    icon: "icon.ico",
  },
  title: "CADES",
  description: "central africa digital economi submit,Bangui 2024 (CADES 2024) HÔTEL LEDGER PLAZA de Bangui, du 28 au 30 Mai 2024",
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
