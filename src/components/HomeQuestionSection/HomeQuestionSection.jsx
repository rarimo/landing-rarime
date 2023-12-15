import './HomeQuestionSection.scss';

import { useTranslation } from 'react-i18next';

import { Icon } from '@/components';
import { CONFIG } from '@/config';

const HomeQuestionSection = () => {
  const { t } = useTranslation();
  return (
    <div className="home-question-section container" data-aos="fade-up">
      <div className="home-question-section_wrapper">
        <h2 className="home-question-section__title">
          <span>{t('home-question-section.title-1')}</span>
          <span className="home-question-section__title-bold">
            {t('home-question-section.title-2')}
          </span>
        </h2>
        <div className="home-question-section__content">
          <a
            href={CONFIG.discordLink}
            target="_blank"
            className="home-question-section__content-item"
            rel="noreferrer"
          >
            <Icon
              iconClass="home-question-section__arrow-right-icon"
              height="24"
              width="24"
              idIcon="icon-arrow"
            />
            <p className="home-question-section__content-item-text">
              {t('home-question-section.item-1-text')}
            </p>
          </a>
          <a
            href={CONFIG.supportEmail}
            target="_blank"
            className="home-question-section__content-item"
            rel="noreferrer"
          >
            <Icon
              iconClass="home-question-section__arrow-right-icon"
              height="24"
              width="24"
              idIcon="icon-arrow"
            />
            <p className="home-question-section__content-item-text">
              {t('home-question-section.item-2-text')}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeQuestionSection;
