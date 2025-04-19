import {useState} from 'react';

const Login = () => {
  // State variables for email
  const [email, setEmail] = useState('');
  // State variable for password
  const [password, setPassword] = useState('');
  // State variable for error message
  const [error, setError] = useState('');
  // State variable for success message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }
    // Handle login logic here
    console.log('Logging in with:', { email, password });
  }
  // Handle login logic here
  return (
    <div className="login">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
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