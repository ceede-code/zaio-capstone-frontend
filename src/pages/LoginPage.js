

// const LoginPage = () => {
//     return(
// <div className="page">
//   <div className="wrap">
//     <header className="admin-header" style={{ justifyContent: 'flex-start' }}>
//       <a href="index.html" className="logo">
//         <span className="logo__mark">a</span>
//         airbnb
//       </a>
//     </header>

//     <main className="auth-shell">
//       <h1 className="auth-title">Login</h1>

//       <form>
//         <div className="field">
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" />
//         </div>
//         <div className="field">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" />
//         </div>

//         <p className="auth-forgot"><a href="#">Forgot Password ?</a></p>

//         <button type="submit" className="btn-login">Login</button>
//       </form>
//     </main>
//   </div>
// </div>
//     )
// }

// export default LoginPage

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://zaio-capstone-backend.onrender.com/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Saving token and user details to localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user || { username }));

      // Redarecting to Admin Dashboard
      navigate('/admin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="page">
      <div className="wrap">
        <header className="admin-header" style={{ justifyContent: 'flex-start' }}>
        <Link to="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAG0iTdwwIPvRT8JoFAk91vie50WVoq2XYrjxDjvJZg&s=10" alt="" style={{ height: '35px', width: 'auto', 'margin-top': '20px' }} />
        </Link>
        </header>

        <main className="auth-shell">
          <h1 className="auth-title">Login</h1>

          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

          <form onSubmit={handleLogin}>
            <div className="field">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>

            <p className="auth-forgot"><a href="#">Forgot Password ?</a></p>

            <button type="submit" className="btn-login">Login</button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;