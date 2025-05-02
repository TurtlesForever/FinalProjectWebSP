import { apiFetch } from './apiFetch';

export async function createUser(userData) {
  return await apiFetch('users/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
}