import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Patient } from '@/types/patient';

// Components and Icons
import { Button } from '../ui/button';
import { Edit2, Trash2, ChevronDown, Calendar, Mail } from 'lucide-react';
import { toast } from 'react-hot-toast';

type PatientCardProps = {
  patient: Patient;
  onEdit: (patient: Patient) => void;
  onDelete: (id: string) => void;
};

export default function PatientCard({
  patient,
  onEdit,
  onDelete,
}: PatientCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDelete = () => {
    onDelete(patient.id);
    toast.success('Patient deleted successfully');
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      layout
      className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <motion.img
            src={patient.avatar}
            alt={patient.name}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-medical-primary/20"
            whileHover={{ scale: 1.05 }}
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground truncate">
              {patient.name}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
              <Calendar className="h-3 w-3" />
              {new Date(patient.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {patient.website && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-medical-primary" />
              <span className="truncate">{patient.website}</span>
            </div>
          )}
        </div>

        {/* Expandable Section */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-border mb-4 space-y-2">
                {patient.description && (
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">
                      Description:
                    </span>
                    <p className="text-sm text-foreground">
                      {patient.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1"
          >
            <span>Details</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4 ml-1" />
            </motion.div>
          </Button>
          <Button variant="outline" size="sm" onClick={() => onEdit(patient)}>
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowDeleteConfirm(true)}
            className="text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Delete Confirmation */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-destructive/10 border-t border-destructive/20 px-6 py-4 overflow-hidden"
          >
            <p className="text-sm text-destructive font-medium mb-3">
              Delete this patient? This action cannot be undone.
            </p>
            <div className="flex gap-2">
              <Button
                variant="destructive"
                size="sm"
                onClick={handleDelete}
                className="flex-1"
              >
                Delete
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
