import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import InquiryForm from '../../components/forms/InquiryForm';
import { CONTACT_DETAILS } from '../../constants/contact';
import { useContactConfirm } from '../../context/ContactConfirmContext';

const ContactPage = () => {
  const { confirmWhatsApp } = useContactConfirm();

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact Khushi Decorations for a free quote on birthday decorations, proposals, and custom balloon setups in Noida & Delhi NCR."
        keywords="contact Khushi Decorations, book event decorator, balloon decoration quote Noida"
      />

      <section className="pt-36 pb-12 surface-primary text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full accent-soft-bg text-xs font-semibold uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-theme mb-4">
            Contact <span className="gold-gradient-text">KhushiDecoration</span>
          </h1>
          <p className="text-theme-secondary text-base max-w-xl mx-auto">
            Questions or a custom quote? Reach out or fill the form below.
          </p>
        </div>
      </section>

      <section className="py-12 surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <div className="glass-card p-8 rounded-3xl space-y-6">
                <h3 className="text-2xl font-bold text-theme border-l-4 border-amber-500 pl-4">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl accent-soft-bg flex items-center justify-center text-lg shrink-0 mt-1">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h5 className="text-theme font-semibold text-sm">Location</h5>
                      <p className="text-theme-muted text-xs mt-1 leading-relaxed">
                        {CONTACT_DETAILS.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl accent-soft-bg flex items-center justify-center text-lg shrink-0 mt-1">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <h5 className="text-theme font-semibold text-sm">Phone</h5>
                      <a
                        href={`tel:${CONTACT_DETAILS.phoneRaw}`}
                        className="text-theme-secondary hover:accent-text text-xs mt-1 block font-medium transition"
                      >
                        {CONTACT_DETAILS.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl accent-soft-bg flex items-center justify-center text-lg shrink-0 mt-1">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h5 className="text-theme font-semibold text-sm">Email</h5>
                      <a
                        href={`mailto:${CONTACT_DETAILS.email}`}
                        className="text-theme-secondary hover:accent-text text-xs mt-1 block font-medium transition"
                      >
                        {CONTACT_DETAILS.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl accent-soft-bg flex items-center justify-center text-lg shrink-0 mt-1">
                      <FaClock />
                    </div>
                    <div>
                      <h5 className="text-theme font-semibold text-sm">Working Hours</h5>
                      <p className="text-theme-muted text-xs mt-1">
                        {CONTACT_DETAILS.workingHours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-theme">
                  <button
                    type="button"
                    onClick={() => confirmWhatsApp()}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition"
                  >
                    <FaWhatsapp className="text-lg" /> WhatsApp
                  </button>
                </div>
              </div>

              <div className="glass-card p-4 rounded-3xl overflow-hidden h-[260px]">
                <iframe
                  title={`${CONTACT_DETAILS.companyName} Location Map`}
                  src={CONTACT_DETAILS.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
