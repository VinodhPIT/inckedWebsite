// i18n.js
import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['fr','de'], // Add more languages as needed
});

export default NextI18NextInstance;