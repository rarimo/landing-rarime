import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
        },
        primary: {
          base: 'var(--color-primary-base)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          base: 'var(--color-secondary-base)',
        },
        background: {
          container: 'var(--color-background-container)',
          component: 'var(--color-background-component)',
        },
        base: {
          black: 'var(--color-base-black)',
          white: 'var(--color-base-white)',
        },
      },
      fontSize: {
        lg: ['20px', '26px'],

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
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.02em',
        wider: '0.04em',
      },
      borderRadius: {
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '56px',
      },
      spacing: new Array(100).fill(0).reduce((acc, _, i) => {
        acc[i] = `${i * 4}px`
        return acc
      }, {}),
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20%) rotate(-5deg)' },
        },
      },
      animation: {
        swing: 'swing 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
