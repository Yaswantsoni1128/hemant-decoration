import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeader from '../layout/SectionHeader';
import GalleryCard from '../cards/GalleryCard';
import LightboxModal from '../common/LightboxModal';
import { GALLERY_ITEMS } from '../../data/gallery';
import { STRINGS } from '../../constants/strings';

const GalleryPreview = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const previewItems = GALLERY_ITEMS.slice(0, 8);
  const looped = [...previewItems, ...previewItems];

  return (
    <section className="py-20 surface-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={STRINGS.galleryPreview.badge}
          title={STRINGS.galleryPreview.title}
          subtitle={STRINGS.galleryPreview.subtitle}
        />
      </div>

      <div className="scroll-mask overflow-hidden">
        <div className="auto-scroll-track auto-scroll-track-slow px-4">
          {looped.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="w-[280px] sm:w-[320px] shrink-0">
              <GalleryCard item={item} onClick={setSelectedImage} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center px-4">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl surface-elevated hover:opacity-90 accent-text font-semibold text-sm border border-theme transition"
        >
          View Full Gallery <FaArrowRight />
        </Link>
      </div>

      <LightboxModal
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        item={selectedImage}
      />
    </section>
  );
};

export default GalleryPreview;
