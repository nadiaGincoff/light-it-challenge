import { tv, type VariantProps } from 'tailwind-variants';
import type { HTMLAttributes } from 'react';
import { AlertCircle } from 'lucide-react';

const errorMessage = tv({
  base: 'flex items-start gap-3 rounded-md border border-destructive/20 bg-destructive/5 p-3 text-destructive',
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type ErrorMessageProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof errorMessage> & {
    message?: string;
    showIcon?: boolean;
  };

export function ErrorMessage({
  message,
  showIcon = true,
  size,
  className,
  children,
  ...props
}: ErrorMessageProps) {
  const content = message || children;

  if (!content) return null;

  return (
    <div className={errorMessage({ size, className })} role="alert" {...props}>
      {showIcon && <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />}
      <div className="flex-1">
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
    </div>
  );
}

export default ErrorMessage;
