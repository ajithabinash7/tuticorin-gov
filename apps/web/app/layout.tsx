import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: 'Special Intensive Revision | Thoothukudi District',
  description: 'Search electoral roll for Thoothukudi Assembly Constituency 210. Special Intensive Revision 2002 data.',
  keywords: ['electoral roll', 'voter search', 'Thoothukudi', 'AC 210', 'Special Intensive Revision', '2002 Data'],
  authors: [{ name: 'Thoothukudi District Election Department' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Special Intensive Revision | Thoothukudi District',
    description: 'Search electoral roll for Thoothukudi District - 2002 Data',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
