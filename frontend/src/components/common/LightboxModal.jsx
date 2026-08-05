import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '../../utils/whatsapp';

const LightboxModal = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/70 text-slate-300 hover:text-white hover:bg-slate-800 transition"
          >
            <FaTimes />
          </button>

          {/* Image */}
          <div className="md:w-2/3 bg-black flex items-center justify-center min-h-[300px] max-h-[550px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover max-h-[550px]"
            />
          </div>

          {/* Details */}
          <div className="md:w-1/3 p-6 flex flex-col justify-between bg-slate-900 text-slate-100">
            <div>
              <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                {item.category}
              </span>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {item.description || 'Customized luxury event setup created with premium balloons, floral arrangements, and custom lighting.'}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  onClose();
                  openWhatsApp({ eventType: item.category, name: 'Guest' });
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold bg-emerald-500 hover:bg-emerald-600 text-white text-sm transition"
              >
                <FaWhatsapp className="text-lg" />
                Book Similar Decor
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LightboxModal;
