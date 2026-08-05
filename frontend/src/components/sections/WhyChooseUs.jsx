import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaClock, FaGem, FaUserShield, FaSmile, FaTag } from 'react-icons/fa';
import SectionHeader from '../layout/SectionHeader';
import { STRINGS } from '../../constants/strings';

const features = [
  {
    icon: FaPaintBrush,
    title: 'Custom Themes',
    description: 'Designs matched to your colors, venue, and celebration style.',
  },
  {
    icon: FaClock,
    title: 'On-Time Setup',
    description: 'We arrive early and finish before your guests do.',
  },
  {
    icon: FaGem,
    title: 'Quality Materials',
    description: 'Premium balloons and decor that stay looking fresh.',
  },
  {
    icon: FaTag,
    title: 'Clear Pricing',
    description: 'No hidden fees — the quote you get is what you pay.',
  },
  {
    icon: FaUserShield,
    title: 'Careful Crew',
    description: 'Safe handling for homes, terraces, and banquet spaces.',
  },
  {
    icon: FaSmile,
    title: 'Happy Clients',
    description: 'We tweak on-site until the setup feels right.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 surface-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={STRINGS.whyChooseUs.badge}
          title={STRINGS.whyChooseUs.title}
          subtitle={STRINGS.whyChooseUs.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card p-6 rounded-2xl group"
              >
                <div className="w-12 h-12 rounded-xl accent-soft-bg flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-all">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-theme mb-2">{item.title}</h3>
                <p className="text-theme-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
