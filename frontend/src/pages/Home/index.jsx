import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import Hero from '../../components/sections/Hero';
import AboutPreview from '../../components/sections/AboutPreview';
import PopularServices from '../../components/sections/PopularServices';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import GalleryPreview from '../../components/sections/GalleryPreview';
import FAQSection from '../../components/sections/FAQSection';
import InquiryForm from '../../components/forms/InquiryForm';
import { FaTimes } from 'react-icons/fa';

const Home = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const handleSelectService = (service) => {
    setSelectedService(service.title || service.name);
    setInquiryModalOpen(true);
  };

  return (
    <>
      <SEO
        title="Event & Balloon Decorations in Noida"
        description="Khushi Decorations creates birthday, anniversary, proposal, and party decor with custom balloon setups across Noida and Delhi NCR."
        keywords="Khushi Decorations, balloon decoration Noida, birthday decoration Delhi, event decorator NCR, room decoration, proposal setup"
      />

      <Hero />
      <AboutPreview />
      <PopularServices onSelectService={handleSelectService} />
      <WhyChooseUs />
      <GalleryPreview />
      <FAQSection />

      <section id="inquiry-section" className="py-20 surface-secondary relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm defaultEventType={selectedService || ''} />
        </div>
      </section>

      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 text-theme-muted hover:text-theme surface-elevated rounded-full border border-theme"
            >
              <FaTimes />
            </button>
            <InquiryForm
              defaultEventType={selectedService}
              onSuccess={() => setTimeout(() => setInquiryModalOpen(false), 3000)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
