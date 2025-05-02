import { apiFetch } from './apiFetch';

export async function loginUser(credentials) {
  return await apiFetch('auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}