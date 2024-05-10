import { createI18nClient } from 'next-international/client'

import { sleep } from '@/utils/sleep'

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  defineLocale,
  useCurrentLocale,
} = createI18nClient({
  en: async () => {
    await sleep(100)
    return import('./en')
  },
  uk: async () => {
    await sleep(100)
    return import('./uk')
  },
})
