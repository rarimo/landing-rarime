import { setStaticParamsLocale } from 'next-international/server'
import { getI18n, getCurrentLocale, getStaticParams } from '../locales/server';

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Home() {
  setStaticParamsLocale('en');

  const t = await getI18n();
  const currentLocale = getCurrentLocale();

  return (
    <div>
      <h1>SSR / SSG</h1>
      <p>
        Current locale:
        <span>{currentLocale}</span>
      </p>
      <p>Hello: {t('hello')}</p>
      <p>
        Hello:{' '}
        {t('welcome', { name: 'John' })}
      </p>
    </div>
  );
}