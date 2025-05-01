const credentials = {
  email: loginEmail.value,
  password: loginPassword.value,
};

try {
  const response = await apiFetch('auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });

  // Store the token after login
  localStorage.setItem('token', response.token);

  // Redirect or update app state as needed
} catch (err) {
  console.error('Login failed:', err.message);
}