import AboutSection from './AboutSection'
import AirdropSection from './AirdropSection'
import Footer from './Footer'
import Header from './Header'
import HeroSection from './HeroSection'
import IntegrationsSection from './IntegrationsSection'
import MetamaskSection from './MetamaskSection'
import PassportsSection from './PassportsSection'
import RewardsSection from './RewardsSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='mb-50 flex flex-col gap-50'>
        <HeroSection />
        <AboutSection />
        <AirdropSection />
        <PassportsSection />
        <RewardsSection />
        <MetamaskSection />
        <IntegrationsSection />
      </main>
      <Footer />
    </>
  )
}
