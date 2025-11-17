export type Patient = {
  id: string;
  name: string;
  avatar: string;
  description: string;
  website: string;
  createdAt: string;
};

export type PatientFormData = {
  name: string;
  avatar: string;
  description: string;
  website: string;
};

export type PatientCreateData = PatientFormData;

export type PatientUpdateData = Partial<PatientFormData> & { id: string };
