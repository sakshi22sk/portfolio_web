import React from 'react';

function Badge({ className = '', variant = 'default', ...props }) {
  const baseStyles = 'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors';
  
  const variants = {
    default: 'bg-slate-900 text-white border-transparent',
    secondary: 'bg-slate-100 text-slate-900 border-transparent dark:bg-slate-800 dark:text-slate-50',
    outline: 'text-slate-900 dark:text-slate-50 border-slate-200 dark:border-slate-800'
  };
  
  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export { Badge };