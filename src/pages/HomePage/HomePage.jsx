import HomeBanner from '@/components/HomeBanner';
import HomeHeroSection from '@/components/HomeHeroSection';
import HomeIdentityIssuersSection from '@/components/HomeIdentityIssuersSection';
import HomeIdentitySection from '@/components/HomeIdentitySection';
import HomeQuestionSection from '@/components/HomeQuestionSection';
import HomeTilesSection from '@/components/HomeTilesSection';

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
