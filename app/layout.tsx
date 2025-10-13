import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { getDirection } from '../i18n/settings'
import { initFunction } from '@/i18n/initFunction'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'A modern issue tracking application built with Next.js 15',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const lang = await initFunction()
  const dir = getDirection(lang)

  return (
    <html lang={lang} dir={dir}>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  )
}
