import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../layout/SectionHeader';
import { STRINGS } from '../../constants/strings';

const steps = [
  {
    step: '01',
    title: 'Select Service & Theme',
    description: 'Browse our catalog of 11+ event decoration categories or share your custom inspiration photos with us.',
  },
  {
    step: '02',
    title: 'Instant Quote & Customization',
    description: 'Receive transparent pricing and customize your balloon color palette, neon sign text, and venue requirements.',
  },
  {
    step: '03',
    title: 'Slot Confirmation',
    description: 'Lock in your preferred setup date & time slot with a quick inquiry or WhatsApp message.',
  },
  {
    step: '04',
    title: 'Hassle-Free Express Setup',
    description: 'Our professional decor team arrives on site, completes setup within 2 hours, and leaves your venue sparkling!',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={STRINGS.process.badge}
          title={STRINGS.process.title}
          subtitle="4 seamless steps from idea to your dream venue transformation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card p-6 rounded-2xl border border-slate-800 relative group"
            >
              <div className="text-4xl font-extrabold gold-gradient-text mb-4 opacity-80 group-hover:scale-110 transition-transform">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
