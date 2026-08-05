import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-40 p-3.5 bg-slate-800/90 text-amber-400 border border-amber-500/30 rounded-full shadow-lg backdrop-blur-md hover:bg-slate-700 transition-all"
        >
          <FaChevronUp className="text-sm" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
