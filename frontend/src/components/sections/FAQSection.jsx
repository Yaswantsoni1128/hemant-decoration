import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import SectionHeader from '../layout/SectionHeader';
import { FAQS } from '../../data/faqs';
import { STRINGS } from '../../constants/strings';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 surface-primary relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={STRINGS.faq.badge}
          title={STRINGS.faq.title}
          subtitle="Quick answers about booking, setup, and our decoration services."
        />

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="glass-card rounded-2xl overflow-hidden transition">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-theme text-base hover:accent-text transition"
                >
                  <span>{faq.question}</span>
                  <FaChevronDown
                    className={`accent-text text-sm shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-theme-secondary text-sm leading-relaxed border-t border-theme pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
