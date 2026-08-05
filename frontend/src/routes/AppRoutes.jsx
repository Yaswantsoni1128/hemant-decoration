import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Loader from '../components/common/Loader';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const ServicesPage = lazy(() => import('../pages/Services'));
const GalleryPage = lazy(() => import('../pages/Gallery'));
const ContactPage = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
