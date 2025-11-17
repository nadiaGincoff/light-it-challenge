import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib';

// Components
import { Label } from './label';

// Types
import type { ReactNode, HTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

type FormFieldProps = {
  label: string;
  htmlFor: string;
  error?: FieldError | string;
  required?: boolean;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function FormField({
  label,
  htmlFor,
  error,
  required = false,
  disabled = false,
  children,
  className = '',
  ...props
}: FormFieldProps) {
  // Handle both FieldError objects and plain strings
  const errorMessage = typeof error === 'string' ? error : error?.message;

  return (
    <div className={cn(className, 'flex flex-col gap-1')} {...props}>
      <Label htmlFor={htmlFor} required={required} disabled={disabled}>
        {label}
      </Label>
      {children}
      <AnimatePresence mode="wait">
        {errorMessage && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="text-sm text-destructive"
            role="alert"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
