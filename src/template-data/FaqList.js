import i18next from 'i18next';

import { CONFIG } from '@/config';
const { t } = i18next;
export const FaqList = [
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
    question: t('home-faq-section.how-identity-credentials-available.question'),
    answer: t('home-faq-section.how-identity-credentials-available.answer'),
  },
  {
    question: t('home-faq-section.what-apps-can-use.question'),
    answer: t('home-faq-section.what-apps-can-use.answer'),
  },
];
