import { useUIStore } from '@/store/ui-store';
import type { Patient } from '@/types/patient';

export const usePatientModal = () => {
  const store = useUIStore();

  return {
    isModalOpen: store.isModalOpen,
    modalMode: store.modalMode,
    selectedPatient: store.selectedEntity as Patient | null,
    openAddModal: store.openAddModal,
    openEditModal: (patient: Patient) => store.openEditModal(patient),
    openViewModal: (patient: Patient) => store.openViewModal(patient),
    closeModal: store.closeModal,
  };
};
