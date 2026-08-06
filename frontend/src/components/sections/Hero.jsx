import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { STRINGS } from '../../constants/strings';
import { CONTACT_DETAILS } from '../../constants/contact';
import Button from '../buttons/Button';
import ConfirmModal from '../common/ConfirmModal';
import { openWhatsApp } from '../../utils/whatsapp';
import { getAsset } from '../../assets';

const HERO_IMAGE = getAsset('MarriageSetup', 1);

const Hero = () => {
  const [whatsappConfirmOpen, setWhatsappConfirmOpen] = useState(false);

  const handleConfirmWhatsApp = () => {
    setWhatsappConfirmOpen(false);
    openWhatsApp();
  };

  return (
    <section className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Balloon and floral event decoration by Khushi Decorations"
          width={1600}
          height={900}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'var(--hero-overlay)' }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white drop-shadow-md mb-3 sm:mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Khushi<span className="text-amber-300">Decoration</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-xl sm:text-3xl lg:text-4xl font-semibold text-white/95 max-w-2xl leading-snug mb-4"
        >
          {STRINGS.hero.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/80 text-sm sm:text-lg max-w-xl leading-relaxed mb-8"
        >
          {STRINGS.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => setWhatsappConfirmOpen(true)}
            icon={FaCalendarCheck}
            aria-label="Book a decoration consultation on WhatsApp"
          >
            {STRINGS.hero.ctaPrimary}
          </Button>

          <a
            href={`tel:${CONTACT_DETAILS.phoneRaw}`}
            aria-label={`Call ${CONTACT_DETAILS.companyName} at ${CONTACT_DETAILS.phoneDisplay}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/30 text-base transition backdrop-blur-md"
          >
            <FaPhoneAlt className="text-amber-300 text-sm" aria-hidden="true" /> Call Now
          </a>

          <Link
            to="/services"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-white/90 hover:text-white text-base underline-offset-4 hover:underline transition"
          >
            {STRINGS.hero.ctaSecondary}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center gap-6 sm:gap-10 text-white/90"
          aria-label="Business highlights"
        >
          <div>
            <span className="block text-2xl sm:text-3xl font-bold text-amber-300">
              {CONTACT_DETAILS.clientsDelivered}+
            </span>
            <span className="text-xs sm:text-sm text-white/70">
              {CONTACT_DETAILS.clientsLabel}
            </span>
          </div>
          <div className="w-px h-10 bg-white/25 hidden sm:block" aria-hidden="true" />
          <div>
            <span className="block text-2xl sm:text-3xl font-bold text-amber-300">
              {CONTACT_DETAILS.experienceYears}
            </span>
            <span className="text-xs sm:text-sm text-white/70">
              {CONTACT_DETAILS.experienceLabel}
            </span>
          </div>
        </motion.div>
      </div>

      <ConfirmModal
        isOpen={whatsappConfirmOpen}
        title="Open WhatsApp?"
        message="Are you sure you want to open WhatsApp to book your consultation?"
        confirmText="OK"
        cancelText="Cancel"
        onConfirm={handleConfirmWhatsApp}
        onCancel={() => setWhatsappConfirmOpen(false)}
      />
    </section>
  );
};

export default Hero;
