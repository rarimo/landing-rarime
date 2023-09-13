import './HomeHeroSection.scss';

import { gsap } from 'gsap';
import { TweenMax } from 'gsap/gsap-core';
import { TextPlugin } from 'gsap/TextPlugin';
import { useLayoutEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { HomeHeroInstallSection, Icon } from '@/components';
import { CONFIG } from '@/config';
import { COMPONENT_NODE_IDS } from '@/const';

gsap.registerPlugin(TextPlugin);

const DELAY = 0.3;

const HomeHeroSection = () => {
  const { t } = useTranslation();

  const titleContainerEl = useRef();
  let firstPlay = false;
  const wordsToShow = useMemo(() => ['One', 'Same'], []);

  const masterTl = useMemo(
    () =>
      gsap.timeline({
        repeat: -1,
      }),
    [],
  );

  useLayoutEffect(() => {
    gsap.to('.home-hero-section__title-part-2-container-cursor', {
      opacity: 0,
      ease: 'power1.inOut',
      repeat: -1,
    });

    const doCoolStuff = tl => {
      if (firstPlay) {
        tl.pause();
        TweenMax.delayedCall(DELAY, function () {
          tl.play();
        });
      } else {
        firstPlay = true;
      }
    };
    wordsToShow.forEach(word => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
      tl.call(doCoolStuff, [masterTl]);
      tl.to('.home-hero-section__title-part-2-word', {
        duration: 0.5,
        text: word,
      });
      masterTl.add(tl);
    });
  }, []);

  return (
    <section
      id={COMPONENT_NODE_IDS.heroSection}
      className="home-hero-section"
      data-aos="fade-up"
    >
      <div className="home-hero-section__content container">
        <div className="home-hero-section__hero-wrapper">
          <div className="home-hero-section__text-wrapper">
            <h2 className="home-hero-section__title">
              <div className="home-hero-section__title-part">
                <span>{t('home-hero-section.title-part-1')}</span>

                <div className="home-hero-section__title-part-2-wrapper">
                  <div
                    ref={titleContainerEl}
                    className="home-hero-section__title-part-2-container"
                  >
                    <div className="home-hero-section__title-part-2-word"></div>

                    <div className="home-hero-section__title-part-2-container-cursor" />
                  </div>
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
                target="_blank"
                rel="noreferrer"
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
