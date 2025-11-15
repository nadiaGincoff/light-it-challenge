export type Patient = {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string; // ISO format: "YYYY-MM-DD"
  address: string;
  medicalHistory: string;
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
};

export type PatientFormData = {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  medicalHistory: string;
};

export type PatientCreateData = PatientFormData;

export type PatientUpdateData = Partial<PatientFormData> & { id: string };
