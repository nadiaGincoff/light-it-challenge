import { motion } from 'framer-motion';
import { useLoadPatients, usePatientModal } from '@/hooks';
import { usePatientStore } from '@/store/patient-store';

// Components
import PatientCard from './patient-card';

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

export default function PatientList() {
  const { isLoading, error } = useLoadPatients();
  const { openEditModal } = usePatientModal();

  const { patients, deletePatientById } = usePatientStore();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;
  if (patients.length === 0) return <div>No patients yet</div>;

  return (
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
    </motion.div>
  );
}
