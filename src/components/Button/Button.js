import Link from 'next/link';
import React from 'react';

export const Button = ({ children, className, variant = 'primary', href = '/' }) => {
  // mengatur tampilan
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return `bg-green-yellow-400 text-white hover:bg-sky-400`;
      case 'primary':
      default:
        return `bg-sky-400 text-white hover:bg-green-yellow-400`;
    }
  };

  const baseStyles = `inline-block w-fit rounded-3xl font-semibold transition-colors tracking-[1px]`;
  const variantStyles = getVariantStyles();

  return (
    <Link href={href} className={`py-1 sm:py-2 px-6 sm:px-10 text-xs sm:text-base md:text-base ${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </Link>
  );
};
