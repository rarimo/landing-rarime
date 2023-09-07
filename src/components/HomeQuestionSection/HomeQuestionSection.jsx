import './HomeQuestionSection.scss';

import { useTranslation } from 'react-i18next';

import { Icon } from '@/components';

const HomeQuestionSection = () => {
  const { t } = useTranslation();
  return (
    <div className="home-question-section container">
      <div className="home-question-section_wrapper">
        <h2 className="home-question-section__title">
          <span>{t('home-question-section.title-1')}</span>
          <span className="home-question-section__title-bold">
            {t('home-question-section.title-2')}
          </span>
        </h2>
        <div className="home-question-section__content">
          <div className="home-question-section__content-item">
            <Icon
              iconClass="home-question-section__arrow-right-icon"
              height="24"
              width="24"
              color="rgba(45, 48, 57, 0.4)"
              idIcon="icon-arrow"
            />
            <p className="home-question-section__content-item-text">
              {t('home-question-section.item-1-text')}
            </p>
          </div>
          <div className="home-question-section__content-item">
            <Icon
              iconClass="home-question-section__arrow-right-icon"
              height="24"
              width="24"
              color="rgba(45, 48, 57, 0.4)"
              idIcon="icon-arrow"
            />
            <p className="home-question-section__content-item-text">
              {t('home-question-section.item-2-text')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeQuestionSection;
