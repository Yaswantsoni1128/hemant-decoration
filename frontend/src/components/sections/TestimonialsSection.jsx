import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import SectionHeader from '../layout/SectionHeader';
import TestimonialCard from '../cards/TestimonialCard';
import { TESTIMONIALS } from '../../data/testimonials';
import { STRINGS } from '../../constants/strings';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-slate-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={STRINGS.testimonials.badge}
          title={STRINGS.testimonials.title}
          subtitle="Real reviews from delighted clients across Noida & Delhi NCR."
        />

        <div className="pb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper py-4"
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
