import { Modal, ModalHeader, ModalBody } from '@/components/ui/modal';
import { PatientForm } from './patient-form';
import { usePatientStore } from '@/store/patient-store';
import { usePatientModal } from '@/hooks/usePatientModal';
import toast from 'react-hot-toast';

import type { PatientCreateData, PatientUpdateData } from '@/types/patient';

export const PatientModal = () => {
  const { isModalOpen, modalMode, selectedPatient, closeModal } =
    usePatientModal();

  const { addPatient, updatePatientById } = usePatientStore();

  const handleSubmit = async (data: PatientCreateData | PatientUpdateData) => {
    if (modalMode === 'edit' && selectedPatient?.id) {
      updatePatientById(selectedPatient.id, data as PatientUpdateData);
      toast.success('Patient updated successfully!');
    } else {
      addPatient(data as PatientCreateData);
      toast.success('Patient created successfully!');
    }
    closeModal();
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalHeader onClose={closeModal}>
        <h2 className="text-xl font-semibold">
          {modalMode === 'edit' ? 'Edit Patient' : 'Add New Patient'}
        </h2>
      </ModalHeader>
      <ModalBody>
        <PatientForm
          patient={selectedPatient}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      </ModalBody>
    </Modal>
  );
};
