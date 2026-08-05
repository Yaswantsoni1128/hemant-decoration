import React from 'react';

const Loader = ({ fullScreen = false, text = 'Loading...' }) => {
  const loaderContent = (
    <div className="flex flex-col items-center justify-center p-8 text-center" role="status" aria-live="polite">
      <div className="relative w-16 h-16 mb-4" aria-hidden="true">
        <div className="absolute inset-0 rounded-full border-4 border-amber-500/20" />
        <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin" />
      </div>
      <p className="accent-text font-medium text-sm tracking-wide">{text}</p>
      <span className="sr-only">Loading page content</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
        {loaderContent}
      </div>
    );
  }

  return (
    <div className="min-h-[50vh] flex items-center justify-center surface-primary">
      {loaderContent}
    </div>
  );
};

export default Loader;
