import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const ConfirmModal = ({
  isOpen,
  variant = 'whatsapp',
  title = 'Are you sure?',
  message = 'Please confirm to continue.',
  confirmText = 'OK',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}) => {
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onCancel?.();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onCancel]);

  const isCall = variant === 'call';
  const Icon = isCall ? FaPhoneAlt : FaWhatsapp;
  const iconWrapClass = isCall
    ? 'bg-amber-500/15 text-amber-600'
    : 'bg-emerald-500/15 text-emerald-600';
  const confirmBtnClass = isCall
    ? 'bg-gradient-to-r from-amber-400 to-yellow-600 text-stone-950 hover:brightness-110'
    : 'bg-emerald-500 hover:bg-emerald-600 text-white';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            aria-label="Close dialog"
            onClick={onCancel}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative w-full max-w-sm glass-card rounded-[2rem] p-7 sm:p-8 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center mb-6">
              <div
                className={`w-16 h-16 rounded-full ${iconWrapClass} flex items-center justify-center text-3xl mb-4`}
              >
                <Icon aria-hidden="true" />
              </div>
              <h3 id="confirm-modal-title" className="text-xl font-bold text-theme mb-2">
                {title}
              </h3>
              <p className="text-sm text-theme-secondary leading-relaxed max-w-xs">{message}</p>
            </div>

            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-center">
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-3 rounded-full font-semibold text-sm border border-theme text-theme-secondary hover:text-theme surface-elevated transition"
              >
                {cancelText}
              </button>
              <button
                type="button"
                onClick={onConfirm}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition ${confirmBtnClass}`}
              >
                {confirmText}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmModal;
