import { forwardRef, type InputHTMLAttributes } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const inputVariants = tv({
  base: 'w-full rounded-lg border font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: {
      default: 'border-border bg-background hover:border-muted-foreground/50',
      error: 'border-destructive bg-destructive/5 hover:border-destructive/70',
    },
    size: {
      default: 'h-10 px-3 py-2 text-sm',
      sm: 'h-9 px-3 py-1.5 text-sm',
      lg: 'h-12 px-4 py-3 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
  VariantProps<typeof inputVariants>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={inputVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
