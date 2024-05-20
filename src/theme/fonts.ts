import { Inter } from 'next/font/google'

export const INTER_FONT_VARIABLE = '--font-inter' as const
export const interFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  // HACK: "Font loader values must be explicitly written literals"
  // https://miroslavpetrik.medium.com/how-to-share-the-next-font-variable-with-typescript-b3073e6c3e86
  variable: '--font-inter' as const satisfies typeof INTER_FONT_VARIABLE,
})
