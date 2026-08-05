import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { STRINGS } from '../../constants/strings';
import { CONTACT_DETAILS } from '../../constants/contact';

const AboutPreview = () => {
  return (
    <section className="py-20 surface-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-theme">
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800"
                alt="Colorful balloon decoration setup by Khushi Decorations"
                width={800}
                height={400}
                loading="lazy"
                decoding="async"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 z-20 glass-card p-5 rounded-2xl hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="text-3xl font-extrabold gold-gradient-text">
                  {CONTACT_DETAILS.experienceYears}
                </div>
                <div className="text-xs text-theme-secondary font-semibold leading-tight">
                  {CONTACT_DETAILS.experienceLabel}
                  <br />
                  & Growing
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full accent-soft-bg text-xs font-semibold uppercase tracking-wider">
              {STRINGS.aboutPreview.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-theme leading-tight">
              {STRINGS.aboutPreview.title}
            </h2>

            <p className="text-theme-secondary text-sm sm:text-base leading-relaxed">
              {STRINGS.aboutPreview.description}
            </p>

            <div className="flex flex-wrap gap-6 py-2">
              <div>
                <span className="text-2xl font-extrabold gold-gradient-text block">
                  {STRINGS.aboutPreview.metric1Number}
                </span>
                <span className="text-xs text-theme-muted">{STRINGS.aboutPreview.metric1Label}</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold gold-gradient-text block">
                  {STRINGS.aboutPreview.metric3Number}
                </span>
                <span className="text-xs text-theme-muted">{STRINGS.aboutPreview.metric3Label}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-theme">
                <FaCheckCircle className="accent-text text-base shrink-0" />
                <span>Custom themes matched to your event</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-theme">
                <FaCheckCircle className="accent-text text-base shrink-0" />
                <span>On-time setup with clean finish</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-theme">
                <FaCheckCircle className="accent-text text-base shrink-0" />
                <span>Quality balloons & decor materials</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl surface-elevated accent-text font-semibold text-sm border border-theme transition hover:opacity-90"
              >
                Learn More About Us <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
