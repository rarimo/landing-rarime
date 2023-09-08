import './HomeHeroSection.scss';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { HomeHeroInstallSection, Icon } from '@/components';
import { COMPONENT_NODE_IDS } from '@/const';

const HomeHeroSection = () => {
  const { t } = useTranslation();
  const refAnimateTitleBefore = useRef(null);
  const refAnimateTitleAfter = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      refAnimateTitleBefore.current.style.color = 'transparent';
      refAnimateTitleAfter.current.style.position = 'absolute';
      refAnimateTitleAfter.current.style.left = '20px';
      setTimeout(() => {
        refAnimateTitleAfter.current.style.position = 'relative';
        refAnimateTitleAfter.current.style.left = '0';
        refAnimateTitleBefore.current.style.display = 'none';
      }, 375);
      refAnimateTitleAfter.current.style.display = '';
      refAnimateTitleAfter.current.className =
        'home-hero-section__title-part-2-animation home-hero-section__title-part-2';
    }, 1000);
  }, []);
  return (
    <section id={COMPONENT_NODE_IDS.heroSection} className="home-hero-section">
      <div className="home-hero-section__content container">
        <div className="home-hero-section__hero-wrapper">
          <div className="home-hero-section__text-wrapper">
            <h2 className="home-hero-section__title">
              <div className="home-hero-section__title-part">
                <span>{t('home-hero-section.title-part-1')}</span>
                <div className="home-hero-section__title-part-2-wrapper">
                  <span
                    ref={refAnimateTitleBefore}
                    className="home-hero-section__title-part-2"
                  >
                    {t('home-hero-section.title-part-2')}
                  </span>
                  <span
                    ref={refAnimateTitleAfter}
                    className="home-hero-section__title-part-2"
                    style={{ display: 'none' }}
                  >
                    {t('home-hero-section.title-part-2-animation')}
                  </span>
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

            <button className="home-hero-section__install-button">
              <Icon
                iconClass="home-hero-section__install-button-icon"
                height="24"
                width="24"
                idIcon="icon-hero-section-button"
              />
              <span className="home-hero-section__install-button-text">
                {t('header.button')}
              </span>
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
