import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { CONTACT_DETAILS } from '../../constants/contact';
import { SERVICES } from '../../constants/services';
import { NAV_ITEMS } from '../../constants/navigation';
import { useContactConfirm } from '../../context/ContactConfirmContext';

const Footer = () => {
  const { confirmWhatsApp, confirmCall } = useContactConfirm();

  return (
    <footer className="surface-secondary text-theme-muted border-t border-theme pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-theme block leading-tight hover:opacity-90 transition">
                Khushi<span className="gold-gradient-text">Decoration</span>
              </span>
            </Link>
            <p className="text-sm text-theme-secondary leading-relaxed">
              {CONTACT_DETAILS.tagline}. Balloon installations, room setups, and party decorations tailored to your theme.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => confirmWhatsApp()}
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-full surface-elevated hover:bg-emerald-500 hover:text-white flex items-center justify-center text-emerald-600 border border-theme transition"
              >
                <FaWhatsapp />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-theme font-bold text-base mb-4 border-l-2 border-amber-500 pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:accent-text transition-colors inline-block py-0.5">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-theme font-bold text-base mb-4 border-l-2 border-amber-500 pl-3">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="hover:accent-text transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-theme font-bold text-base mb-4 border-l-2 border-amber-500 pl-3">
              Contact
            </h4>
            <div className="flex items-start gap-3 text-xs">
              <FaMapMarkerAlt className="accent-text text-base shrink-0 mt-0.5" />
              <span>{CONTACT_DETAILS.address}</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <FaPhoneAlt className="accent-text text-sm shrink-0" />
              <button
                type="button"
                onClick={confirmCall}
                className="hover:text-theme transition text-left"
              >
                {CONTACT_DETAILS.phoneDisplay}
              </button>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <FaEnvelope className="accent-text text-sm shrink-0" />
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-theme transition">
                {CONTACT_DETAILS.email}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-theme flex items-center justify-center text-xs text-theme-muted">
          <p>
            © {new Date().getFullYear()} {CONTACT_DETAILS.companyName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
