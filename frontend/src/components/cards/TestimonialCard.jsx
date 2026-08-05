import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="glass-card rounded-2xl p-6 relative flex flex-col justify-between h-full border border-slate-800">
      <FaQuoteLeft className="text-amber-500/20 text-4xl absolute top-6 right-6" />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 text-amber-400 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-sm" />
          ))}
        </div>

        <p className="text-slate-300 text-sm italic leading-relaxed mb-6">
          "{testimonial.comment}"
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-amber-500/40"
        />
        <div>
          <h5 className="text-white font-semibold text-sm">{testimonial.name}</h5>
          <p className="text-xs text-slate-400">
            {testimonial.event} • <span className="text-amber-400">{testimonial.location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
