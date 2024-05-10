import { setStaticParamsLocale } from 'next-international/server'

import HomePage from '@/components/HomePage'

import { getStaticParams } from '../../locales/server'

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setStaticParamsLocale(locale)

  return <HomePage />
}
