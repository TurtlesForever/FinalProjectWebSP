import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
});

// Add token to headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = token;
  return config;
});

export default API;&#8203;:contentReference[oaicite:22]{index=22}