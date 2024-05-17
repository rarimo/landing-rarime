import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

import { fontSize } from './config'

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: Object.keys(fontSize) }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
