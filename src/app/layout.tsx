import '@/theme/global.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import AosInit from '@/common/AosInit'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Use one wallet for your social identity | rariMe',
  description:
    'rariMe is a Snap that allows you to securely store and manage your identity credentials using Rarimo Protocol and Zero-Knowledge Proof technology',

  openGraph: {
    title: 'Use one wallet for your social identity | rariMe',
    description:
      'rariMe is a Snap that allows you to securely store and manage your identity credentials using Rarimo Protocol and Zero-Knowledge Proof technology',
    type: 'website',
    url: 'https://rarime.com/',
    siteName: 'RariMe',
    images: '/images/og-image.webp',
  },

  twitter: {
    title: 'Use one wallet for your social identity | rariMe',
    description:
      'rariMe is a Snap that allows you to securely store and manage your identity credentials using Rarimo Protocol and Zero-Knowledge Proof technology',
    card: 'summary_large_image',
    images: '/images/og-image.webp',
    site: 'rarime.com',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
        <link
          href='/favicon/favicon-dark.ico'
          rel='icon'
          media='(prefers-color-scheme: light)'
        />
        <link
          href='/favicon/favicon-light.ico'
          rel='icon'
          media='(prefers-color-scheme: dark)'
        />
      </head>
      <body className={inter.className}>
        <AosInit />
        {children}
      </body>
    </html>
  )
}
