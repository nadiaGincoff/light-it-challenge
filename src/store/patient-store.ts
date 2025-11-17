import { create } from 'zustand';
import type { Patient, PatientFormData } from '@/types';
import { generateId } from '@/lib/utils';

type PatientDataState = {
  // data
  patients: Patient[];

  // Actions
  setPatients: (patients: Patient[]) => void;
  addPatient: (data: PatientFormData) => void;
  updatePatientById: (id: string, data: Partial<PatientFormData>) => void;
  deletePatientById: (id: string) => void;
  getPatientById: (id: string) => Patient | undefined;
};

export const usePatientStore = create<PatientDataState>((set, get) => ({
  // Initial state
  patients: [],

  // Initial state from API (sorted by createdAt desc)
  setPatients: patients =>
    set({
      patients: patients.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    }),

  // Create new patient
  addPatient: data => {
    const newPatient: Patient = {
      ...data,
      id: generateId(),
      createdAt: new Date().toISOString(),
    };

    set(state => ({
      patients: [newPatient, ...state.patients].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    }));

    return newPatient;
  },

  // Update existing patient
  updatePatientById: (id, data) =>
    set(state => ({
      patients: state.patients.map(patient =>
        patient.id === id
          ? {
              ...patient,
              ...data,
            }
          : patient
      ),
    })),

  deletePatientById: id =>
    set(state => ({
      patients: state.patients.filter(patient => patient.id !== id),
    })),

  getPatientById: id => {
    return get().patients.find(patient => patient.id === id);
  },
}));
