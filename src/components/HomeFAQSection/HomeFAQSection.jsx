import './HomeFAQSection.scss';

import { useTranslation } from 'react-i18next';

import { FaqList } from '@/template-data';

import AppAccordion from '../AppAccordion/AppAccordion';

const HomeFAQSection = () => {
  const { t } = useTranslation();

  return (
    <div className="home-faq-section container" data-aos="fade-up">
      <div className="home-faq-section__wrp">
        <h2 className="home-faq-section__title">
          <span className="home-faq-section__title">
            {t('home-faq-section.title.part-1')}
          </span>
          <span className="home-faq-section__title home-faq-section__title--bold">
            {t('home-faq-section.title.part-2')}
          </span>
        </h2>
        <div className="home-faq-section__content">
          <ul>
            {FaqList.map(FAQ => (
              <li key={FAQ.question}>
                <AppAccordion
                  headerText={FAQ.question}
                  contentText={FAQ.answer}
                  link={FAQ.link}
                  linkText={FAQ.linkText}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQSection;
