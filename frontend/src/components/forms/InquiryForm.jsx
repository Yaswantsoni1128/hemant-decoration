import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { submitInquiry } from '../../services/inquiry.service';
import { SERVICES } from '../../constants/services';
import Button from '../buttons/Button';

const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[0-9+\-\s()]{7,15}$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  eventType: z.string().min(1, 'Please select an event type'),
  eventDate: z.string().min(1, 'Please select your event date'),
  budget: z.string().optional(),
  location: z.string().min(2, 'Please enter your event location or landmark'),
  message: z.string().optional(),
});

const inputClass =
  'w-full px-4 py-2.5 rounded-xl surface-elevated border border-theme text-theme text-sm focus:border-amber-500 focus:outline-none transition';

const InquiryForm = ({ defaultEventType = '', onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      eventType: defaultEventType || SERVICES[0].title,
      budget: '₹2,000 - ₹5,000',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await submitInquiry(data);
      toast.success(res.message || 'Inquiry submitted successfully!');

      if (res.data?.whatsappLink) {
        setWhatsappUrl(res.data.whatsappLink);
      }

      reset();
      if (onSuccess) onSuccess(res.data);
    } catch (err) {
      toast.error(err.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-theme mb-2">Book Your Decoration</h3>
        <p className="text-theme-muted text-xs md:text-sm">
          Fill the form and we will get back to you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-theme-secondary mb-1.5">
              Full Name <span className="accent-text">*</span>
            </label>
            <input type="text" placeholder="Your name" {...register('name')} className={inputClass} />
            {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-theme-secondary mb-1.5">
              Phone / WhatsApp <span className="accent-text">*</span>
            </label>
            <input type="tel" placeholder="+91 ..." {...register('phone')} className={inputClass} />
            {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-theme-secondary mb-1.5">
              Email Address <span className="accent-text">*</span>
            </label>
            <input type="email" placeholder="name@example.com" {...register('email')} className={inputClass} />
            {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-theme-secondary mb-1.5">
              Event Type <span className="accent-text">*</span>
            </label>
            <select {...register('eventType')} className={inputClass}>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
            {errors.eventType && <p className="text-rose-500 text-xs mt-1">{errors.eventType.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-theme-secondary mb-1.5">
              Event Date <span className="accent-text">*</span>
            </label>
            <input type="date" {...register('eventDate')} className={inputClass} />
            {errors.eventDate && <p className="text-rose-500 text-xs mt-1">{errors.eventDate.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-theme-secondary mb-1.5">Budget Range</label>
            <select {...register('budget')} className={inputClass}>
              <option value="₹1,500 - ₹3,000">₹1,500 - ₹3,000</option>
              <option value="₹3,000 - ₹6,000">₹3,000 - ₹6,000</option>
              <option value="₹6,000 - ₹12,000">₹6,000 - ₹12,000</option>
              <option value="₹12,000+">₹12,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-theme-secondary mb-1.5">
            Event Location <span className="accent-text">*</span>
          </label>
          <input
            type="text"
            placeholder="City / area / venue"
            {...register('location')}
            className={inputClass}
          />
          {errors.location && <p className="text-rose-500 text-xs mt-1">{errors.location.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-theme-secondary mb-1.5">
            Special Requests
          </label>
          <textarea
            rows="3"
            placeholder="Theme, colors, or other details"
            {...register('message')}
            className={`${inputClass} resize-none`}
          ></textarea>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          icon={FaPaperPlane}
          className="w-full mt-2"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
      </form>

      {whatsappUrl && (
        <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
          <p className="text-xs text-emerald-600 mb-2 font-medium">
            Inquiry sent! Continue on WhatsApp?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition"
          >
            <FaWhatsapp className="text-base" /> Open WhatsApp
          </a>
        </div>
      )}
    </div>
  );
};

export default InquiryForm;
