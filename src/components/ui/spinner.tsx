import { tv, type VariantProps } from 'tailwind-variants';
import type { HTMLAttributes } from 'react';

const spinner = tv({
  base: 'inline-flex items-center justify-center rounded-full border-2 border-current border-t-transparent animate-spin',
  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
    },
    variant: {
      default: 'text-primary',
      destructive: 'text-destructive',
      secondary: 'text-muted-foreground',
      ghost: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

type SpinnerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof spinner> & {
    label?: string;
  };

export function Spinner({
  size,
  variant,
  label,
  className,
  ...props
}: SpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3" {...props}>
      <div
        className={spinner({ size, variant, className })}
        aria-busy="true"
        aria-label={label}
        role="status"
      />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
}

export default Spinner;
