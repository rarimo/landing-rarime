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
        xs: ['12px', '16px'],
        sm: ['14px', '18px'],
        md: ['16px', '20px'],
        lg: ['20px', '26px'],
        xl: ['24px', '30px'],
        '2xl': ['32px', '40px'],
        '3xl': ['40px', '48px'],
        '4xl': ['64px', '70px'],
        '5xl': ['96px', '96px'],
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
    },
  },
  plugins: [],
}
export default config
