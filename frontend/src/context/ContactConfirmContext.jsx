import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import ConfirmModal from '../components/common/ConfirmModal';
import { openWhatsApp } from '../utils/whatsapp';
import { CONTACT_DETAILS } from '../constants/contact';

const ContactConfirmContext = createContext(null);

export const ContactConfirmProvider = ({ children }) => {
  const [dialog, setDialog] = useState({
    open: false,
    variant: 'whatsapp',
    whatsappData: {},
  });

  const close = useCallback(() => {
    setDialog((prev) => ({ ...prev, open: false }));
  }, []);

  const confirmWhatsApp = useCallback((data = {}) => {
    setDialog({ open: true, variant: 'whatsapp', whatsappData: data });
  }, []);

  const confirmCall = useCallback(() => {
    setDialog({ open: true, variant: 'call', whatsappData: {} });
  }, []);

  const handleConfirm = useCallback(() => {
    const { variant, whatsappData } = dialog;
    setDialog((prev) => ({ ...prev, open: false }));

    if (variant === 'call') {
      window.location.href = `tel:${CONTACT_DETAILS.phoneRaw}`;
      return;
    }

    openWhatsApp(whatsappData);
  }, [dialog]);

  const value = useMemo(
    () => ({ confirmWhatsApp, confirmCall }),
    [confirmWhatsApp, confirmCall]
  );

  const isCall = dialog.variant === 'call';

  return (
    <ContactConfirmContext.Provider value={value}>
      {children}
      <ConfirmModal
        isOpen={dialog.open}
        variant={dialog.variant}
        title={isCall ? 'Place a Call?' : 'Open WhatsApp?'}
        message={
          isCall
            ? `Are you sure you want to call ${CONTACT_DETAILS.phoneDisplay}?`
            : 'Are you sure you want to open WhatsApp to continue?'
        }
        confirmText="OK"
        cancelText="Cancel"
        onConfirm={handleConfirm}
        onCancel={close}
      />
    </ContactConfirmContext.Provider>
  );
};

export const useContactConfirm = () => {
  const ctx = useContext(ContactConfirmContext);
  if (!ctx) {
    throw new Error('useContactConfirm must be used within ContactConfirmProvider');
  }
  return ctx;
};
