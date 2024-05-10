import { setStaticParamsLocale } from 'next-international/server'

import HomePage from '@/components/HomePage'

import { getStaticParams } from '../locales/server'

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Home() {
  setStaticParamsLocale('en')

  return <HomePage />
}
