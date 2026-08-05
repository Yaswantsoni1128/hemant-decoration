import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaBars, FaTimes, FaWhatsapp, FaMoon, FaSun } from 'react-icons/fa';
import { NAV_ITEMS } from '../../constants/navigation';
import { CONTACT_DETAILS } from '../../constants/contact';
import { openWhatsApp } from '../../utils/whatsapp';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const isHome = location.pathname === '/';
  const overHero = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const brandColor = overHero ? 'text-white' : 'text-theme';
  const navIdle = overHero ? 'text-white/80 hover:text-white' : 'text-theme-secondary hover:text-theme';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel shadow-lg py-3 border-b border-theme'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="group">
            <span className={`text-lg sm:text-xl font-extrabold tracking-tight ${brandColor} block leading-tight group-hover:opacity-90 transition`}>
              Khushi<span className="gold-gradient-text">Decoration</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-semibold transition-colors duration-200 py-1 ${
                    isActive ? 'text-amber-400' : navIdle
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2.5 rounded-xl border transition ${
                overHero
                  ? 'border-white/30 text-white/90 hover:bg-white/10'
                  : 'border-theme text-theme-secondary hover:accent-text'
              }`}
            >
              {isDark ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
            </button>

            <button
              onClick={() => openWhatsApp()}
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition"
            >
              <FaWhatsapp className="text-sm" /> WhatsApp
            </button>

            <a
              href={`tel:${CONTACT_DETAILS.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-600 text-stone-950 hover:brightness-110 shadow-md gold-glow transition"
            >
              <FaPhoneAlt className="text-xs" /> {CONTACT_DETAILS.phoneDisplay}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2.5 rounded-xl border ${
                overHero ? 'border-white/30 text-white' : 'border-theme text-theme-secondary'
              }`}
            >
              {isDark ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
            </button>
            <a
              href={`tel:${CONTACT_DETAILS.phoneRaw}`}
              className="p-2.5 rounded-xl bg-amber-400 text-stone-950 font-bold"
              aria-label="Call directly"
            >
              <FaPhoneAlt className="text-sm" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl border ${
                overHero
                  ? 'border-white/30 text-white bg-white/10'
                  : 'surface-elevated text-theme border-theme'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-theme overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block text-base font-semibold py-2 transition-colors ${
                      isActive
                        ? 'accent-text font-bold pl-2 border-l-2 border-amber-500'
                        : 'text-theme-secondary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-theme flex flex-col gap-3">
                <button
                  onClick={() => openWhatsApp()}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 text-white font-semibold text-sm"
                >
                  <FaWhatsapp className="text-lg" /> Chat on WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
