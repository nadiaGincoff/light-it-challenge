import axios from 'axios';
import { API_BASE_URL } from '@/constants/';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
// Executed before each request
apiClient.interceptors.request.use(
  config => {
    // Here I can add auth tokens or others headers if needed
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response Interceptor
// Executed after each response
apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Centralized error handling
    if (error.response) {
      console.error('API Error:', error.response.data);
      console.error('Status:', error.response.status);
    } else if (error.request) {
      console.error('Network Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }

    return Promise.reject(error);
  }
);
