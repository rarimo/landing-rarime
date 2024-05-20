import '@/theme/styles.scss'

import type { Metadata } from 'next'
import { ReactNode } from 'react'

import AosInit from '@/common/AosInit'
import { interFont } from '@/theme/fonts'
import { cn } from '@/theme/utils'

export const metadata: Metadata = {
  // TODO: Change to rarime.com
  metadataBase: new URL('https://rarime-landing-test.netlify.app/'),
  title: 'Go Incognito | RariMe',
  description:
    'RariMe is a self-custody identity wallet that allows users to verify their eligibility for Web3 services without exposing their personal data',

  openGraph: {
    title: 'Go Incognito | RariMe',
    description:
      'RariMe is a self-custody identity wallet that allows users to verify their eligibility for Web3 services without exposing their personal data',
    type: 'website',
    // TODO: Change to rarime.com
    url: 'https://rarime-landing-test.netlify.app/',
    siteName: 'RariMe',
    images: '/images/og-image.png',
  },

  twitter: {
    title: 'Go Incognito | RariMe',
    description:
      'RariMe is a self-custody identity wallet that allows users to verify their eligibility for Web3 services without exposing their personal data',
    card: 'summary_large_image',
    images: '/images/og-image.png',
    site: 'rarime.com',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className={cn(
        interFont.variable,
        'scroll-pt-20 scroll-smooth bg-background-container font-sans',
      )}
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
      <body>
        <AosInit />
        {children}
      </body>
    </html>
  )
}
