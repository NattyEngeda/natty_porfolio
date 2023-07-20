import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './layouts/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Natnael Engeda',
  description: "Natnael Engeda's Portfolio",
  icons: {
    icon: '/logo/logo-512x512.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
