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
  description: 'Leading software development company specializing in web development, mobile apps, cloud solutions, and AI integration. Transform your business with our cutting-edge technology solutions.',
  keywords: 'web development, mobile apps, cloud solutions, AI integration, digital agency, software development, Malaysia, Grit Studio, tech company',
  authors: [{ name: 'Grit Studio', url: 'https://grit-studio.vercel.app' }],
  creator: 'Grit Studio',
  publisher: 'Grit Studio',
  metadataBase: new URL('https://grit-studio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'Grit Studio',
    title: 'Grit Studio | Transform Your Digital Presence',
    description: 'Partner with Malaysia\'s innovative tech studio for web development, mobile apps, cloud solutions, and AI integration. Transform your ideas into powerful digital experiences.',
    url: 'https://grit-studio.vercel.app',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grit Studio - Modern Digital Solutions',
      }
    ],
    locale: 'en_MY',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@GritStudio',
    creator: '@GritStudio',
    title: 'Grit Studio | Modern Digital Solutions',
    description: 'Transform your business with our cutting-edge technology solutions. Expert web development, mobile apps, cloud solutions, and AI integration.',
    images: ['/twitter-card.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
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