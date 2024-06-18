import { ThemeConfig } from 'tailwindcss/types/config'

export const screens: ThemeConfig['screens'] = {
  '3xl': '2048px',
  'h-sm': { raw: '(max-height: 400px)' },
}
