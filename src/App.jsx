// src/App.jsx
import React from 'react';
// Removed: import { useTranslation } from 'react-i18next'; 
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <> {/* React Fragment */}
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}

export default App;