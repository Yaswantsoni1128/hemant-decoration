import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeader from '../layout/SectionHeader';
import ServiceCard from '../cards/ServiceCard';
import { SERVICES } from '../../constants/services';
import { STRINGS } from '../../constants/strings';

const PopularServices = ({ onSelectService }) => {
  const featuredServices = SERVICES.slice(0, 6);
  const looped = [...featuredServices, ...featuredServices];

  return (
    <section className="py-20 surface-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={STRINGS.services.badge}
          title={STRINGS.services.title}
          subtitle={STRINGS.services.subtitle}
        />
      </div>

      <div className="scroll-mask overflow-hidden">
        <div className="auto-scroll-track px-4">
          {looped.map((service, idx) => (
            <div key={`${service.id}-${idx}`} className="w-[300px] sm:w-[340px] shrink-0">
              <ServiceCard service={service} onSelect={onSelectService} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center px-4">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 text-stone-950 hover:brightness-110 shadow-lg gold-glow transition"
        >
          View All Services <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default PopularServices;
