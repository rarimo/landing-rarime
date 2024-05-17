import { ThemeConfig } from 'tailwindcss/types/config'

export const colors: ThemeConfig['colors'] = {
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
}
