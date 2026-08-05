import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Button from '../buttons/Button';
import { openWhatsApp } from '../../utils/whatsapp';

const PackageCard = ({ pkg, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${
        pkg.popular ? 'border-2 border-amber-400 gold-glow bg-slate-900/90' : 'border border-slate-800'
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-yellow-600 text-slate-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
          Most Popular
        </div>
      )}

      <div>
        <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
        <p className="text-slate-400 text-xs mb-6 min-h-[36px]">{pkg.description}</p>

        <div className="mb-6 pb-6 border-b border-slate-800">
          <span className="text-3xl font-extrabold gold-gradient-text">{pkg.price}</span>
          <span className="text-slate-400 text-xs ml-2">/ complete setup</span>
        </div>

        <ul className="space-y-3 mb-8">
          {pkg.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
              <FaCheckCircle className="text-amber-400 text-sm shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant={pkg.popular ? 'primary' : 'outline'}
        onClick={() => onSelect ? onSelect(pkg) : openWhatsApp({ eventType: pkg.name })}
        className="w-full"
      >
        Choose Package
      </Button>
    </motion.div>
  );
};

export default PackageCard;
