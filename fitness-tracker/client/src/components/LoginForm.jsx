import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
  const navigate = useNavigate(); // Using useNavigate for routing

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state on submit
    try {
      const res = await axios.post('/users/login', user);
      localStorage.setItem('token', res.data.token);
      navigate('/'); // Redirect after login
    } catch (err) {
      console.error('Login failed:', err);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={loginUser}>
        <input
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <div className="password-container">
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;