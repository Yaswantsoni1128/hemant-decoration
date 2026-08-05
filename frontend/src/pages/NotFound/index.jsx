import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Button from '../../components/buttons/Button';
import { HiSparkles } from 'react-icons/hi2';

const NotFound = () => {
  return (
    <>
      <SEO title="Page Not Found" description="The page you requested could not be found." noindex />
      <section className="min-h-screen flex items-center justify-center py-32 surface-primary text-center px-4">
        <div className="max-w-md glass-card p-10 rounded-3xl">
          <div className="w-16 h-16 rounded-2xl accent-soft-bg flex items-center justify-center text-3xl mx-auto mb-6">
            <HiSparkles />
          </div>
          <h1 className="text-6xl font-extrabold gold-gradient-text mb-4">404</h1>
          <h2 className="text-xl font-bold text-theme mb-2">Page Not Found</h2>
          <p className="text-theme-muted text-xs mb-8">
            The page you are looking for might have been moved or does not exist.
          </p>
          <Link to="/">
            <Button variant="primary" className="w-full">
              Back To Homepage
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
