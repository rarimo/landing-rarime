import './HomeHeroSection.scss';

import { useTranslation } from 'react-i18next';

import { HomeHeroInstallSection, Icon } from '@/components';
import { CONFIG } from '@/config';
import { COMPONENT_NODE_IDS } from '@/const';

const HomeHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id={COMPONENT_NODE_IDS.heroSection} className="home-hero-section">
      <div className="home-hero-section__content container">
        <div className="home-hero-section__hero-wrapper">
          <div className="home-hero-section__text-wrapper">
            <h2 className="home-hero-section__title">
              <div className="home-hero-section__title-part">
                <span>{t('home-hero-section.title-part-1')}</span>
                <div className="home-hero-section__title-part-2">
                  <span>{t('home-hero-section.title-part-2')}</span>
                  <span className="home-hero-section__title-part-2-after">
                    {t('home-hero-section.title-part-2-after')}
                  </span>
                </div>
                <span>{t('home-hero-section.title-part-3')}</span>
              </div>
              <div className="home-hero-section__title-part">
                <span>{t('home-hero-section.title-part-4')}</span>
              </div>
            </h2>
            <h5 className="home-hero-section__subtitle" data-aos="fade-up">
              {t('home-hero-section.subtitle')}
            </h5>

            <button>
              <a
                className="home-hero-section__install-button"
                href={CONFIG.linkToInstallSnap}
              >
                <Icon
                  iconClass="home-hero-section__install-button-icon"
                  height="24"
                  width="24"
                  idIcon="icon-hero-section-button"
                />
                <span className="home-hero-section__install-button-text">
                  {t('header.button')}
                </span>
              </a>
            </button>
            <p className="home-hero-section__description" data-aos="fade-up">
              {t('home-hero-section.description')}
            </p>
          </div>
          <HomeHeroInstallSection />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
