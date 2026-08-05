import React from 'react';
import { motion } from 'framer-motion';
import { FaExpand } from 'react-icons/fa';

const GalleryCard = ({ item, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      onClick={() => onClick(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(item);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${item.title} in gallery`}
      className="relative rounded-2xl overflow-hidden cursor-pointer group border border-theme"
    >
      <div className="h-64 md:h-72 w-full overflow-hidden surface-elevated">
        <img
          src={item.image}
          alt={`${item.title} decoration by Khushi Decorations`}
          width={640}
          height={720}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
        <div className="flex justify-end">
          <span className="p-2.5 rounded-full bg-black/50 text-amber-300 text-sm backdrop-blur-md">
            <FaExpand />
          </span>
        </div>
        <div>
          <span className="inline-block px-2.5 py-0.5 bg-amber-500/25 text-amber-200 text-xs font-semibold rounded-full mb-1">
            {item.category}
          </span>
          <h4 className="text-white font-bold text-base line-clamp-1">{item.title}</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
