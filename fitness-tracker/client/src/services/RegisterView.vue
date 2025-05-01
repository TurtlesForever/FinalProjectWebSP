const registrationData = {
  email: registerEmail.value,
  password: registerPassword.value,
};

try {
  const response = await apiFetch('auth/register', {
    method: 'POST',
    body: JSON.stringify(registrationData),
  });

  // Store token after registration
  localStorage.setItem('token', response.token);

  // Redirect or update app state
} catch (err) {
  console.error('Registration failed:', err.message);
}