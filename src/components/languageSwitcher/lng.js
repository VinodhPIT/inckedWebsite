import { useTranslation } from 'next-i18next';
import i18n from '../../../i18n';

function LanguageSwitcher() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>{t('english')}</button>
      <button onClick={() => changeLanguage('fr')}>{t('french')}</button>
    </div>
  );
}

export default LanguageSwitcher;