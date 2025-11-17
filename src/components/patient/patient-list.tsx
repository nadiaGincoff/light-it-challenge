import { motion } from 'framer-motion';
import { usePatientStore } from '@/store/patient-store';

// Hooks
import { useLoadPatients, usePatientModal } from '@/hooks';

// Components and Icons
import PatientCard from './patient-card';
import PatientModal from './patient-modal';
import { Button } from '../ui/button';
import Spinner from '../ui/spinner';
import ErrorMessage from '../error-message';
import Header from '../header';
import { Plus } from 'lucide-react';

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

export default function PatientList() {
  const { isLoading, error } = useLoadPatients();
  const { openEditModal, openAddModal } = usePatientModal();

  const { patients, deletePatientById } = usePatientStore();

  if (isLoading) return <Spinner size="lg" variant="default" />;
  if (error) return;

  return (
    <div className="flex flex-col justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
      <Header
        title="Patient Management"
        description="Manage and track patient information efficiently"
      />
      {error ? (
        <ErrorMessage message="Failed to load patient data" />
      ) : (
        <>
          <div className="w-full flex justify-end mb-5 sm:px-6">
            <Button onClick={openAddModal} size="lg" className="gap-2">
              <Plus className="h-5 w-5" />
              Add Patient
            </Button>
          </div>
          <motion.div
            key={`grid-${patients.length}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="show"
            variants={gridVariants}
          >
            {patients.map(patient => (
              <PatientCard
                key={patient.id}
                patient={patient}
                onEdit={openEditModal}
                onDelete={deletePatientById}
              />
            ))}
            <PatientModal />
          </motion.div>
        </>
      )}
    </div>
  );
}
