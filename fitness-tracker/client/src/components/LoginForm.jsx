import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/users/login', user);
      localStorage.setItem('token', res.data.token);
      window.location.href = '/'; // redirect after login
    } catch (err) {
      console.error('Login failed:', err);
      alert('Login failed. Check your credentials.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={loginUser}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;