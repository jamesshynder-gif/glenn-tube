import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black disabled:opacity-60 disabled:cursor-not-allowed';

  const style =
    variant === 'primary'
      ? 'bg-brand-orange-500 text-black hover:bg-brand-orange-400'
      : 'bg-transparent text-white border border-zinc-700 hover:border-brand-orange-500 hover:text-brand-orange-400';

  return <button className={`${base} ${style} ${className}`} {...props} />;
}
