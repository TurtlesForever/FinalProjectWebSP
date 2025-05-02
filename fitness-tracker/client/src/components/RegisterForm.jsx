import { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/users/register', user);
      localStorage.setItem('token', res.data.token);
      window.location.href = '/'; // redirect after registration
    } catch (err) {
      console.error('Registration failed:', err);
      alert('Registration failed. Try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={registerUser}>
        <input
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;