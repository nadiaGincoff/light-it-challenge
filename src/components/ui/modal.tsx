import type { ReactNode } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Components
import { Button } from './button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

type ModalHeaderProps = {
  children: ReactNode;
  onClose?: () => void;
  className?: string;
};

type ModalBodyProps = {
  children: ReactNode;
  className?: string;
};

type ModalFooterProps = {
  children: ReactNode;
  className?: string;
};

export function Modal({
  isOpen,
  onClose,
  children,
  className = '',
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Modal Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl z-50 max-h-[90vh] overflow-hidden ${className}`}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function ModalHeader({
  children,
  onClose,
  className = '',
}: ModalHeaderProps) {
  return (
    <div
      className={`flex items-center justify-between p-6 border-b border-border ${className}`}
    >
      {children}
      {onClose && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="rounded-full"
          type="button"
        >
          <X className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}

export function ModalBody({ children, className = '' }: ModalBodyProps) {
  return (
    <div
      className={`p-6 overflow-y-auto max-h-[calc(90vh-140px)] ${className}`}
    >
      {children}
    </div>
  );
}

export function ModalFooter({ children, className = '' }: ModalFooterProps) {
  return (
    <div className={`flex gap-3 mt-6 pt-6 border-t border-border ${className}`}>
      {children}
    </div>
  );
}
