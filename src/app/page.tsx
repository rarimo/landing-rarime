import { setStaticParamsLocale } from 'next-international/server'

import { getStaticParams } from '../locales/server'
import HomePage from './HomePage'

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Home() {
  setStaticParamsLocale('en')

  return <HomePage />
}
