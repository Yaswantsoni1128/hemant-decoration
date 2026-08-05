import api from './api';

export const submitInquiry = async (formData) => {
  return await api.post('/inquiry', formData);
};
