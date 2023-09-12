import './HomeFAQSection.scss';

import { useTranslation } from 'react-i18next';

import { CONFIG } from '@/config';

import AppAccordion from '../AppAccordion/AppAccordion';

const HomeFAQSection = () => {
  const { t } = useTranslation();

  const FAQ_LIST = [
    {
      question: t('home-faq-section.what-does-do.question'),
      answer: t('home-faq-section.what-does-do.answer'),
    },
    {
      question: t('home-faq-section.what-does-not-do.question'),
      answer: t('home-faq-section.what-does-not-do.answer'),
    },
    {
      question: t('home-faq-section.how-to-use-features.question'),
      answer: t('home-faq-section.how-to-use-features.answer'),
    },
    {
      question: t('home-faq-section.reach-out-support.question'),
      answer: t('home-faq-section.reach-out-support.answer'),
      linkText: t('home-faq-section.reach-out-support.linkText'),
      link: CONFIG.discordLink,
    },
    {
      question: t('home-faq-section.what-can-store.question'),
      answer: t('home-faq-section.what-can-store.answer'),
    },
    {
      question: t('home-faq-section.what-chains-used-on.question'),
      answer: t('home-faq-section.what-chains-used-on.answer'),
    },
    {
      question: t(
        'home-faq-section.how-identity-credentials-available.question',
      ),
      answer: t('home-faq-section.how-identity-credentials-available.answer'),
    },
    {
      question: t('home-faq-section.what-apps-can-use.question'),
      answer: t('home-faq-section.what-apps-can-use.answer'),
    },
  ];

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
            {FAQ_LIST.map(FAQ => (
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
