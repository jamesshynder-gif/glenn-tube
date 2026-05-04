import { HTMLAttributes } from 'react';

export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`card-surface p-4 shadow-sm ${className}`} {...props} />;
}
