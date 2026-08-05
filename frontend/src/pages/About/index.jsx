import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaBullseye, FaLightbulb } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { CONTACT_DETAILS } from '../../constants/contact';

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Khushi Decorations — a young event and balloon decoration team with 20+ clients delivered and 1 year of hands-on experience."
        keywords="about Khushi Decorations, event decorator Noida, balloon stylist Delhi NCR"
      />

      <section className="pt-36 pb-16 surface-primary relative overflow-hidden text-center">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full accent-soft-bg text-xs font-semibold uppercase tracking-wider mb-4">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-theme mb-5">
            About <span className="gold-gradient-text">{CONTACT_DETAILS.companyName}</span>
          </h1>
          <p className="text-theme-secondary text-base sm:text-lg leading-relaxed">
            A young decor team creating warm, beautiful setups for birthdays, anniversaries, and special moments.
          </p>
        </div>
      </section>

      <section className="py-16 surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-theme mb-6">
                {CONTACT_DETAILS.experienceYears} Year of Crafting Celebrations
              </h2>
              <p className="text-theme-secondary text-sm sm:text-base leading-relaxed mb-4">
                {CONTACT_DETAILS.companyName} started with a simple goal — make every celebration look special without stress.
                We have delivered {CONTACT_DETAILS.clientsDelivered}+ client setups with careful styling and on-time installation.
              </p>
              <p className="text-theme-secondary text-sm sm:text-base leading-relaxed mb-6">
                From cozy room surprises to festive party backdrops, we focus on clean design, quality materials, and personal service.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-theme">
                  <FaCheckCircle className="accent-text shrink-0" />
                  <span>Custom color themes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-theme">
                  <FaCheckCircle className="accent-text shrink-0" />
                  <span>On-time setup</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-theme">
                  <FaCheckCircle className="accent-text shrink-0" />
                  <span>Clear pricing</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-theme">
                  <FaCheckCircle className="accent-text shrink-0" />
                  <span>Clean finish</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-theme shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
                  alt="Khushi Decorations event setup showcase"
                  width={800}
                  height={420}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 surface-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-3xl">
              <div className="w-14 h-14 rounded-2xl accent-soft-bg flex items-center justify-center text-2xl mb-6">
                <FaBullseye />
              </div>
              <h3 className="text-2xl font-bold text-theme mb-3">Our Mission</h3>
              <p className="text-theme-secondary text-sm leading-relaxed">
                Deliver beautiful, stress-free decoration experiences with honest pricing and reliable on-site setup.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <div className="w-14 h-14 rounded-2xl accent-soft-bg flex items-center justify-center text-2xl mb-6">
                <FaLightbulb />
              </div>
              <h3 className="text-2xl font-bold text-theme mb-3">Our Vision</h3>
              <p className="text-theme-secondary text-sm leading-relaxed">
                Become the go-to local decor partner for celebrations that feel personal, warm, and thoughtfully styled.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
