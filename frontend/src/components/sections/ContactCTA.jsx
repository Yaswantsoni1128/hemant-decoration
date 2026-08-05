import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { STRINGS } from '../../constants/strings';
import { CONTACT_DETAILS } from '../../constants/contact';
import { openWhatsApp } from '../../utils/whatsapp';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 gold-gradient-bg opacity-5 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 rounded-3xl border border-amber-500/30 shadow-2xl gold-glow"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            {STRINGS.cta.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal">
            {STRINGS.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openWhatsApp()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white text-base transition shadow-xl"
            >
              <FaWhatsapp className="text-xl" /> Chat Instantly on WhatsApp
            </button>
            <a
              href={`tel:${CONTACT_DETAILS.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 text-slate-950 hover:brightness-110 text-base transition shadow-xl gold-glow"
            >
              <FaPhoneAlt className="text-base" /> Call {CONTACT_DETAILS.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
