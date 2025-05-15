import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section.css';
import './ServicesSection.css';

const ServicesSection = () => {
  const { t } = useTranslation();
  const services = [
    { key: 'item1', icon: '💻' }, 
    { key: 'item2', icon: '📱' },
    { key: 'item3', icon: '📢' },
  ];

  return (
    <section className="content-section services-section">
      <div className="section-container">
        <h2>{t('services.title')}</h2>
        <div className="section-divider"></div>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.key}>
              <div className="service-icon">{service.icon}</div>
              <h3>{t(`services.${service.key}_title`)}</h3>
              <p>{t(`services.${service.key}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
