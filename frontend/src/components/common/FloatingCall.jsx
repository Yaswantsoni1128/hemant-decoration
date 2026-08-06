import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { CONTACT_DETAILS } from '../../constants/contact';
import { useContactConfirm } from '../../context/ContactConfirmContext';

const FloatingCall = () => {
  const { confirmCall } = useContactConfirm();

  return (
    <motion.button
      type="button"
      onClick={confirmCall}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Call ${CONTACT_DETAILS.companyName}`}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-600 text-stone-950 rounded-full shadow-2xl gold-glow transition-all duration-300"
    >
      <FaPhoneAlt className="text-xl" aria-hidden="true" />
    </motion.button>
  );
};

export default FloatingCall;
