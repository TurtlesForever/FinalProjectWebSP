import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
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

  const registerUser = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state on submit
    try {
      const res = await axios.post('/users/register', user);
      localStorage.setItem('token', res.data.token);
      navigate('/'); // Redirect after registration
    } catch (err) {
      console.error('Registration failed:', err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={registerUser}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;