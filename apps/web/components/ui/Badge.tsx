import { HTMLAttributes } from 'react';

export function Badge({ className = '', ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-brand-orange-500/70 bg-brand-orange-500/20 px-2.5 py-1 text-xs font-medium text-brand-orange-400 ${className}`}
      {...props}
    />
  );
}
