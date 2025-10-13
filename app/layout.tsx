import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { getDirection, languages } from '../i18n/settings'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'A modern issue tracking application built with Next.js 15',
}

export default function RootLayout({
  params: { lng },
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const dir = getDirection(lng)
  return (
    <html lang={lng} dir={dir}>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  )
}
