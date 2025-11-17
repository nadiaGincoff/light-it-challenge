import { create } from 'zustand';

type ModalMode = 'add' | 'edit' | 'view';

type UIState<T = unknown> = {
  // Modal state
  isModalOpen: boolean;
  modalMode: ModalMode;
  selectedEntity: T | null;

  // Modal actions
  openAddModal: () => void;
  openEditModal: (entity: T) => void;
  openViewModal: (entity: T) => void;
  closeModal: () => void;

  // Generic entity selection (for any purpose)
  setSelectedEntity: (entity: T | null) => void;
  clearSelectedEntity: () => void;
};

export const useUIStore = create<UIState>(set => ({
  // Initial state
  isModalOpen: false,
  modalMode: 'add',
  selectedEntity: null,

  // Modal actions
  openAddModal: () =>
    set({
      isModalOpen: true,
      modalMode: 'add',
      selectedEntity: null,
    }),

  openEditModal: entity =>
    set({
      isModalOpen: true,
      modalMode: 'edit',
      selectedEntity: entity,
    }),

  openViewModal: entity =>
    set({
      isModalOpen: true,
      modalMode: 'view',
      selectedEntity: entity,
    }),

  closeModal: () =>
    set({
      isModalOpen: false,
      selectedEntity: null,
    }),

  // Generic entity selection
  setSelectedEntity: entity => set({ selectedEntity: entity }),

  clearSelectedEntity: () => set({ selectedEntity: null }),
}));
