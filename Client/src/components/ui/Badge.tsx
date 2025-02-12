import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

const variants = {
  default: 'bg-gray-700 text-gray-100',
  success: 'bg-green-900 text-green-100',
  warning: 'bg-yellow-900 text-yellow-100',
  error: 'bg-red-900 text-red-100',
};

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}