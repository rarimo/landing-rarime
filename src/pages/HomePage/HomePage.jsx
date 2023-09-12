import {
  HomeBanner,
  HomeFAQSection,
  HomeHeroSection,
  HomeIdentityIssuersSection,
  HomeIdentitySection,
  HomeQuestionSection,
  HomeTilesSection,
} from '@/components'

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeBanner />
      <HomeIdentitySection />
      <HomeTilesSection />
      <HomeFAQSection />
      <HomeIdentityIssuersSection />
      <HomeQuestionSection />
    </>
  )
}

export default HomePage
