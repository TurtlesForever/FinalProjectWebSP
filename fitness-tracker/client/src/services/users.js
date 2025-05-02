import API from '@/api';  // Assuming API is an axios instance

export async function createUser(userData) {
  try {
    const response = await API.post('users/register', userData);
    return response.data;  // Return the response data, such as the created user or token
  } catch (err) {
    console.error('Error creating user:', err.message);
    throw new Error('Failed to create user. Please try again.');
  }
}