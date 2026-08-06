import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useContactConfirm } from '../../context/ContactConfirmContext';

const FloatingWhatsApp = () => {
  const { confirmWhatsApp } = useContactConfirm();

  return (
    <motion.button
      type="button"
      onClick={() => confirmWhatsApp()}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300"
    >
      <FaWhatsapp className="text-2xl" aria-hidden="true" />
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
      </span>
    </motion.button>
  );
};

export default FloatingWhatsApp;
