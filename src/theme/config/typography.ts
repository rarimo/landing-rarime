import defaultTheme from 'tailwindcss/defaultTheme'
import { ThemeConfig } from 'tailwindcss/types/config'

export const PRIMARY_FONT_VARIABLE = '--font-primary' as const
export const fontFamily: ThemeConfig['fontFamily'] = {
  primary: [`var(${PRIMARY_FONT_VARIABLE}, ${defaultTheme.fontFamily.sans})`],
}

export const fontSize: ThemeConfig['fontSize'] = {
  h1: ['96px', { lineHeight: '96px', fontWeight: '700' }],
  h2: ['60px', { lineHeight: '66px', fontWeight: '700' }],
  h3: ['40px', { lineHeight: '48px', fontWeight: '700' }],
  h4: ['32px', { lineHeight: '40px', fontWeight: '700' }],
  h5: ['24px', { lineHeight: '30px', fontWeight: '700' }],
  h6: ['20px', { lineHeight: '26px', fontWeight: '700' }],

  subtitle1: ['24px', { lineHeight: '30px', fontWeight: '600' }],
  subtitle2: ['20px', { lineHeight: '26px', fontWeight: '600' }],
  subtitle3: ['16px', { lineHeight: '20px', fontWeight: '600' }],
  subtitle4: ['14px', { lineHeight: '18px', fontWeight: '600' }],

  body1: [
    '20px',
    { lineHeight: '26px', fontWeight: '400', letterSpacing: '0.02em' },
  ],
  body2: [
    '16px',
    { lineHeight: '20px', fontWeight: '400', letterSpacing: '0.02em' },
  ],
  body3: [
    '14px',
    { lineHeight: '18px', fontWeight: '400', letterSpacing: '0.02em' },
  ],

  overline1: [
    '14px',
    { lineHeight: '18px', fontWeight: '700', letterSpacing: '0.04em' },
  ],
  overline2: [
    '12px',
    { lineHeight: '16px', fontWeight: '700', letterSpacing: '0.04em' },
  ],
  caption1: ['14px', { lineHeight: '18px', fontWeight: '400' }],

  'button-medium': ['14px', { lineHeight: '18px', fontWeight: '500' }],
  'button-large': ['16px', { lineHeight: '20px', fontWeight: '500' }],

  // raw
  'sm-normal': ['14px', { lineHeight: '18px', fontWeight: '400' }],
  'lg-medium': [
    '20px',
    { lineHeight: '26px', fontWeight: '500', letterSpacing: '0.02em' },
  ],
  'md-medium': [
    '18px',
    { lineHeight: '26px', fontWeight: '500', letterSpacing: '0.02em' },
  ],
}
