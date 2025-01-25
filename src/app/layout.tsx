import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0A0A0A',
}

export const metadata: Metadata = {
  title: 'Grit Studio | Modern Digital Solutions',
  description: 'Professional web, mobile, and cloud solutions for modern businesses. We specialize in web development, mobile apps, cloud solutions, and AI integration.',
  keywords: 'web development, mobile apps, cloud solutions, AI integration, digital agency, software development, Malaysia',
  authors: [{ name: 'Grit Studio' }],
  creator: 'Grit Studio',
  publisher: 'Grit Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Grit Studio',
    description: 'Professional Digital Solutions for Modern Businesses',
    images: ['/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
    siteName: 'Grit Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grit Studio',
    description: 'Professional Digital Solutions for Modern Businesses',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A0A0A" />
        <style>{`
          /* Remove Next.js loading bar */
          #nprogress {
            display: none !important;
          }
        `}</style>
      </head>
      <body className={`${inter.className} bg-[#0A0A0A] text-white antialiased relative min-h-screen`}>
        {/* Global noise overlay */}
        <div className="noise fixed inset-0" />
        
        {/* Main content */}
        <div className="relative">
          <Navbar />
          <main className="relative">{children}</main>
        </div>
      </body>
    </html>
  )
} 