import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        text: {
          primary: '#202020',
          secondary: 'rgba(32, 32, 32, 0.56)',
        },
        primary: {
          base: '#CDFD4A',
          dark: '#ACD53E',
        },
        secondary: {
          base: '#202020',
        },
        background: {
          container: '#FFFFFF',
          component: 'rgba(32, 32, 32, 0.05)',
        },
        base: {
          black: '#202020',
          white: '#FFFFFF',
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
