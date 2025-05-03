import API from '@/api';

export async function loginUser(credentials) {
  try {
    const response = await API.post('/users/login', credentials);
    return response.data;
  } catch (err) {
    const message = err.response?.data?.message || err.message;
    throw new Error(message);
  }
}