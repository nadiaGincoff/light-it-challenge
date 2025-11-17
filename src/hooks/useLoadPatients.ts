import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPatients } from '@/services';
import { usePatientStore } from '@/store';
import toast from 'react-hot-toast';

export const useLoadPatients = () => {
  const patients = usePatientStore(state => state.patients);
  const setPatients = usePatientStore(state => state.setPatients);

  const { data, isLoading, error } = useQuery({
    queryKey: ['patients'],
    queryFn: getPatients,
    enabled: patients.length === 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (data && data.length > 0 && patients.length === 0) {
      setPatients(data);
      toast.success(`Loaded ${data.length} patients`);
    }
  }, [data, patients.length, setPatients]);

  useEffect(() => {
    if (error) {
      toast.error('Failed to load patients');
      console.error(error);
    }
  }, [error]);

  return { isLoading, error };
};
