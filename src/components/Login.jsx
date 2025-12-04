import { useState } from 'react';
import { login } from '../services/api';
import '../shared/FormStyles.css';

const Login = () => {
  // State variables for email
  const [email, setEmail] = useState('');
  // State variable for password
  const [password, setPassword] = useState('');
  // State variable for error message
  const [error, setError] = useState('');
  // State variable for success message
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }

    try {
      const data = await login(email, password);
      setSuccess('Login successful!');
      // Here you would typically store the token and redirect
      // Token storage and redirect logic would go here
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    }
  }

  return (
    <div className="form-container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      {success && <p className="success" style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login