import '@/theme/styles/index.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import AosInit from '@/common/AosInit'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Go Incognito | RariMe',
  description:
    'RariMe is a self-custody identity wallet that allows users to verify their eligibility for Web3 services without exposing their personal data',

  openGraph: {
    title: 'Go Incognito | RariMe',
    description:
      'RariMe is a self-custody identity wallet that allows users to verify their eligibility for Web3 services without exposing their personal data',
    type: 'website',
    url: 'https://rarime.com/',
    siteName: 'RariMe',
    images: '/images/og-image.webp',
  },

  twitter: {
    title: 'Go Incognito | RariMe',
    description:
      'RariMe is a self-custody identity wallet that allows users to verify their eligibility for Web3 services without exposing their personal data',
    card: 'summary_large_image',
    images: '/images/og-image.webp',
    site: 'rarime.com',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className='scroll-pt-20 scroll-smooth bg-background-container'
    >
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
