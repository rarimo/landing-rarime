import {
  HomeBanner,
  HomeHeroSection,
  HomeIdentityIssuersSection,
  HomeIdentitySection,
  HomeQuestionSection,
  HomeTilesSection,
} from '@/components';

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeBanner />
      <HomeIdentitySection />
      <HomeTilesSection />
      <HomeIdentityIssuersSection />
      <HomeQuestionSection />
    </>
  );
};

export default HomePage;
