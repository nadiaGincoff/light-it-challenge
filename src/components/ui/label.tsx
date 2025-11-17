import { tv, type VariantProps } from 'tailwind-variants';
import type { LabelHTMLAttributes } from 'react';

const label = tv({
  base: 'block font-medium text-gray-900 transition-colors',
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
    required: {
      true: "after:content-['*'] after:ml-0.5 after:text-red-500",
      false: '',
    },
  },
  defaultVariants: {
    size: 'sm',
    disabled: false,
    required: false,
  },
});

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof label> & {
    htmlFor?: string;
  };

export function Label({
  children,
  className,
  size,
  disabled,
  required,
  htmlFor,
  ...props
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={label({ size, disabled, required, className })}
      {...props}
    >
      {children}
    </label>
  );
}
