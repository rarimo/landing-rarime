import '@/theme/global.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Use one wallet for your social identity | rariMe',
  description:
    'rariMe is a Snap that allows you to securely store and manage your identity credentials using Rarimo Protocol and Zero-Knowledge Proof technology',

  openGraph: {
    title: 'Use one wallet for your social identity | rariMe',
    description:
      'rariMe is a Snap that allows you to securely store and manage your identity credentials using Rarimo Protocol and Zero-Knowledge Proof technology',
    type: 'website',
    url: 'https://distributedlab.com/',
    siteName: 'Distributed Lab',
    images: '/images/og-image.png',
  },

  twitter: {
    title: 'Use one wallet for your social identity | rariMe',
    description:
      'rariMe is a Snap that allows you to securely store and manage your identity credentials using Rarimo Protocol and Zero-Knowledge Proof technology',
    card: 'summary_large_image',
    images: '/images/og-image.png',
    site: 'rarime.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      {/* 
<link href="/favicon/favicon-white.ico" rel="icon" media="(prefers-color-scheme: dark)"/>
    <link href="/favicon/favicon-white.ico" rel="icon" type="image/x-icon" media="(prefers-color-scheme: dark)"/>
     */}

      <body className={inter.className}>{children}</body>
    </html>
  )
}
