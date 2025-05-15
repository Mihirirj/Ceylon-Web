import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-container">
      <h1>{t('hero.title')}</h1>
      <p className="hero-subtitle">{t('hero.subtitle')}</p>
      <button className="hero-cta-button">{t('hero.ctaButton')}</button>
    </div>
  );
};

export default HeroSection;