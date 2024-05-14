import Footer from '@/common/Footer'
import Header from '@/common/Header'

import AboutSection from './components/AboutSection'
import CardsSection from './components/CardsSection'
import HeroSection from './components/HeroSection'
import IntegrationsSection from './components/IntegrationsSection'
import MetamaskSection from './components/MetamaskSection'
import RewardsSection from './components/RewardsSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='mb-50 flex flex-col gap-50'>
        <HeroSection />
        <AboutSection />
        <CardsSection />
        <RewardsSection />
        <MetamaskSection />
        <IntegrationsSection />
      </main>
      <Footer />
    </>
  )
}
