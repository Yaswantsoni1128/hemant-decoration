import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ badge, title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full accent-soft-bg text-xs font-semibold uppercase tracking-wider mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-theme tracking-tight mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-theme-muted text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
