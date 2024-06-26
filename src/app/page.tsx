import Footer from '@/common/Footer'
import Header from '@/common/Header'
import { WindowScrollProvider } from '@/contexts/window-scroll'

import AboutSection from './components/AboutSection'
import CardsSection from './components/CardsSection'
import HeroSection from './components/HeroSection'
import IntegrationsSection from './components/IntegrationsSection'
import PassportsCard from './components/PassportsCard'
import RewardsSection from './components/RewardsSection'

export default function Home() {
  return (
    <>
      <Header />
      <main className='mb-25 flex flex-col gap-25 lg:mb-50 lg:gap-50'>
        <WindowScrollProvider>
          <HeroSection />
          <AboutSection />
          <PassportsCard />
          <RewardsSection />
          <CardsSection />
          <IntegrationsSection />
        </WindowScrollProvider>
      </main>
      <Footer />
    </>
  )
}
