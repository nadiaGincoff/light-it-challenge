import { apiClient } from './api';
import type { Patient } from '@/types';

/**
 * Get all patients
 *
 * Endpoint: GET /users
 *
 * @returns Promise with patient array
 * @throws Error if the request fails
 */

export const getPatients = async (): Promise<Patient[]> => {
  const response = await apiClient.get<Patient[]>('/users');
  return response.data;
};
