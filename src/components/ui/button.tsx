import { type ButtonHTMLAttributes } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline: 'border border-border bg-transparent hover:bg-muted',
      ghost: 'hover:bg-muted',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 px-3 text-sm',
      lg: 'h-12 px-6 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
