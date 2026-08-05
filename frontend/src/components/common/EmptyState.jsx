import React from 'react';
import { HiSparkles } from 'react-icons/hi2';

const EmptyState = ({ title = 'No items found', message = 'Try clearing your filters or choosing another category.', action }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center glass-card rounded-2xl">
      <div className="w-16 h-16 rounded-full accent-soft-bg flex items-center justify-center mb-4 text-2xl">
        <HiSparkles />
      </div>
      <h3 className="text-xl font-semibold text-theme mb-2">{title}</h3>
      <p className="text-theme-muted max-w-md text-sm mb-6">{message}</p>
      {action}
    </div>
  );
};

export default EmptyState;
