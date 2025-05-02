import axiosInstance from './api';

export async function apiFetch(path, options = {}) {
  try {
    const response = await axiosInstance({
      url: path,
      method: options.method || 'GET',
      data: options.body ? JSON.parse(options.body) : undefined,
      headers: options.headers,
    });
    return response.data;
  } catch (err) {
    const message = err.response?.data?.message || err.message;
    throw new Error(message);
  }
}