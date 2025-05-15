
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation(); 

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          {t('navbar.title')}
        </a>
        <div className="navbar-controls">
          <span className="current-lang-indicator">
            {t('currentLanguage', { 
              lng: t(`languages.${i18n.resolvedLanguage.toLowerCase()}`) || i18n.resolvedLanguage.toUpperCase() 
            })}
          </span>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
