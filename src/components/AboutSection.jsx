import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section.css'; // Common styles for sections

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="content-section about-section">
      <div className="section-container">
        <h2>{t('about.title')}</h2>
        <div className="section-divider"></div>
        <p>{t('about.paragraph1')}</p>
        <p>{t('about.paragraph2')}</p>
      </div>
    </section>
  );
};

export default AboutSection;