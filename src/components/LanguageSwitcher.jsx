
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; 

const languageOptions = [
  { code: 'en', nameKey: 'languages.english' },
  { code: 'si', nameKey: 'languages.sinhala' },
  { code: 'ta', nameKey: 'languages.tamil' },
];

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher-container">
      {/* <span className="language-label">{t('navbar.language')}:</span> */}
      <div className="language-buttons">
        {languageOptions.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`lang-btn ${i18n.resolvedLanguage === lang.code ? 'active' : ''}`}
            title={t(lang.nameKey)} // Tooltip with full language name
          >
            {lang.code.toUpperCase()} 
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
