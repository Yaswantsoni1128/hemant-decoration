import axios from 'axios';
import { envConfig } from '../config/env.config';

const api = axios.create({
  baseURL: envConfig.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.message || 'Something went wrong. Please check your network connection.';
    return Promise.reject(new Error(message));
  }
);

export default api;
