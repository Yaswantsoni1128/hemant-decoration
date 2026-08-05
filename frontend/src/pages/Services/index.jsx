import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import ServiceCard from '../../components/cards/ServiceCard';
import InquiryForm from '../../components/forms/InquiryForm';
import { SERVICES } from '../../constants/services';
import { FaTimes } from 'react-icons/fa';

const categories = ['All', ...new Set(SERVICES.map((s) => s.category))];

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredServices =
    activeCategory === 'All'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  const handleSelectService = (service) => {
    setSelectedService(service.title);
    setModalOpen(true);
  };

  return (
    <>
      <SEO
        title="Decoration Services"
        description="Browse birthday, anniversary, baby welcome, proposal, haldi, and custom event decoration services from Khushi Decorations."
        keywords="birthday decoration, anniversary decor, proposal decoration, baby shower decor, room decoration packages"
      />

      <section className="pt-36 pb-12 surface-primary text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full accent-soft-bg text-xs font-semibold uppercase tracking-wider mb-4">
            Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-theme mb-4">
            Our <span className="gold-gradient-text">Decoration Services</span>
          </h1>
          <p className="text-theme-secondary text-base max-w-xl mx-auto">
            Choose a category and book a setup that fits your celebration.
          </p>
        </div>
      </section>

      <section className="py-12 surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-600 text-stone-950 font-bold shadow-md gold-glow'
                    : 'surface-elevated text-theme-secondary border border-theme hover:opacity-90'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={handleSelectService}
              />
            ))}
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 text-theme-muted hover:text-theme surface-elevated rounded-full border border-theme"
            >
              <FaTimes />
            </button>
            <InquiryForm
              defaultEventType={selectedService}
              onSuccess={() => setTimeout(() => setModalOpen(false), 3000)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesPage;
