import AboutSection from './AboutSection'
import CardsSection from './CardsSection'
import Footer from './Footer'
import Header from './Header'
import HeroSection from './HeroSection'
import IntegrationsSection from './IntegrationsSection'
import MetamaskSection from './MetamaskSection'
import RewardsSection from './RewardsSection'

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
