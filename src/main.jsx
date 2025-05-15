
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; 
import './i18n';     // i18next configuration

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback={<div style={{ textAlign: 'center', marginTop: '50px', fontSize: '1.5rem' }}>Loading CeylonWeb...</div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
