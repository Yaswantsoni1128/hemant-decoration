import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/common/SEO';
import GalleryCard from '../../components/cards/GalleryCard';
import LightboxModal from '../../components/common/LightboxModal';
import EmptyState from '../../components/common/EmptyState';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../../data/gallery';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Decoration Gallery"
        description="Browse real birthday arches, proposal setups, room surprises, and party decorations by Khushi Decorations."
        keywords="decoration gallery, balloon arch photos, party setup portfolio, event decor images Noida"
      />

      <section className="pt-36 pb-12 surface-primary text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full accent-soft-bg text-xs font-semibold uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-theme mb-4">
            Work <span className="gold-gradient-text">Gallery</span>
          </h1>
          <p className="text-theme-secondary text-base max-w-xl mx-auto">
            Real setups from celebrations we have styled.
          </p>
        </div>
      </section>

      <section className="py-12 surface-secondary min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-600 text-stone-950 font-bold shadow-md gold-glow'
                    : 'surface-elevated text-theme-secondary border border-theme hover:opacity-90'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <GalleryCard key={item.id} item={item} onClick={setSelectedImage} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="mt-8">
              <EmptyState message="No photos in this category yet." />
            </div>
          )}
        </div>
      </section>

      <LightboxModal
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        item={selectedImage}
      />
    </>
  );
};

export default GalleryPage;
