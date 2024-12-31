import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "New Year Celebration",
  description: "Celebrate the New Year with our animated page!",
  icons: {
    icon: [
      {
        url: './Celebration.svg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}){
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
