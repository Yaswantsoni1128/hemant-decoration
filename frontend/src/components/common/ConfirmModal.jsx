import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const ConfirmModal = ({
  isOpen,
  title = 'Open WhatsApp?',
  message = 'Are you sure you want to open WhatsApp to continue?',
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
            className="relative w-full max-w-md glass-card rounded-2xl p-6 sm:p-7 shadow-2xl"
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center text-2xl shrink-0">
                <FaWhatsapp aria-hidden="true" />
              </div>
              <div>
                <h3 id="confirm-modal-title" className="text-xl font-bold text-theme mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-theme-secondary leading-relaxed">{message}</p>
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
              <button
                type="button"
                onClick={onCancel}
                className="px-5 py-2.5 rounded-xl font-semibold text-sm border border-theme text-theme-secondary hover:text-theme surface-elevated transition"
              >
                {cancelText}
              </button>
              <button
                type="button"
                onClick={onConfirm}
                className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-600 text-white transition"
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
