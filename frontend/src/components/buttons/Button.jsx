import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  icon: Icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none';

  const sizes = {
    sm: 'px-3.5 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const variants = {
    primary: 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 text-stone-950 hover:brightness-110 shadow-lg gold-glow',
    secondary: 'surface-elevated text-theme hover:opacity-90 border border-theme',
    outline: 'border border-amber-500/50 accent-text hover:bg-amber-500/10',
    glass: 'glass-panel text-theme hover:opacity-90 border border-theme',
    gradient: 'bg-gradient-to-r from-amber-500 to-yellow-600 text-stone-950 hover:opacity-90 shadow-xl',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="text-current" />}
      {children}
    </motion.button>
  );
};

export default Button;
