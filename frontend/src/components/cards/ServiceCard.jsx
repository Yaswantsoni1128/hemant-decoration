import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import { openWhatsApp } from '../../utils/whatsapp';

const ServiceCard = ({ service, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group h-full"
    >
      <div>
        <div className="relative h-52 overflow-hidden surface-elevated">
          <img
            src={service.image}
            alt={`${service.title} — Khushi Decorations`}
            width={800}
            height={520}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-amber-300 text-xs font-semibold rounded-full border border-amber-500/30">
              Starts {service.startingPrice}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider block mb-1">
              {service.category}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
              {service.title}
            </h3>
          </div>
        </div>

        <div className="p-5">
          <p className="text-theme-secondary text-sm leading-relaxed mb-4">
            {service.shortDescription}
          </p>

          {service.features && (
            <ul className="space-y-2 mb-4">
              {service.features.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-center text-xs text-theme-muted gap-2">
                  <FaCheckCircle className="accent-text shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="px-5 pb-5 pt-1 flex items-center gap-3">
        <button
          onClick={() => (onSelect ? onSelect(service) : openWhatsApp({ eventType: service.title }))}
          className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-600 text-stone-950 font-semibold text-xs transition-all hover:brightness-110 flex items-center justify-center gap-2 shadow-md"
        >
          <HiSparkles /> Book Setup
        </button>
        <button
          onClick={() => openWhatsApp({ eventType: service.title })}
          aria-label="Ask on WhatsApp"
          className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500 hover:text-white transition"
        >
          <FaWhatsapp className="text-base" />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
