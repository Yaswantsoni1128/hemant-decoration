import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';
import FloatingCall from '../components/common/FloatingCall';
import ScrollToTop from '../components/common/ScrollToTop';
import JsonLd from '../components/common/JsonLd';
import { ContactConfirmProvider } from '../context/ContactConfirmContext';
import { useTheme } from '../context/ThemeContext';

const MainLayout = () => {
  const { isDark } = useTheme();

  return (
    <ContactConfirmProvider>
      <div className="min-h-screen flex flex-col surface-primary selection:bg-amber-300 selection:text-stone-900">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd />
        <ScrollToTop />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: isDark ? '#0f172a' : '#ffffff',
              color: isDark ? '#f8fafc' : '#1c1917',
              border: isDark
                ? '1px solid rgba(212, 175, 55, 0.3)'
                : '1px solid rgba(180, 83, 9, 0.2)',
            },
          }}
        />
        <Navbar />
        <main id="main-content" className="flex-grow">
          <Outlet />
        </main>
        <FloatingWhatsApp />
        <FloatingCall />
        <Footer />
      </div>
    </ContactConfirmProvider>
  );
};

export default MainLayout;
