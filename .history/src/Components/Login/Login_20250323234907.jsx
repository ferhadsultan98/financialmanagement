// src/components/Login/Login.jsx
import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Hardcoded credentials (replace with real auth later)
  const validUsername = 'admin';
  const validPassword = 'admin';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      navigate('/'); // Redirect to main app after login
    } else {
      setError('İstifadəçi adı və ya şifrə yanlışdır!');
    }
  };

  return (
    <div className="login-container">
      <motion.div
        className="login-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2>Xoş Gəlmisiniz</h2>
        <p>Maliyyə İdarəetmə Sistemimizə Daxil Olun</p>

        {error && (
          <motion.div
            className="error-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleLogin}>
          <motion.div className="input-group" whileHover={{ scale: 1.02 }}>
            <input
              type="text"
              placeholder="İstifadəçi adı"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </motion.div>

          <motion.div className="input-group" whileHover={{ scale: 1.02 }}>
            <input
              type="password"
              placeholder="Şifrə"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Daxil Ol
          </motion.button>
        </form>

        <div className="login-info">
          <p>Demo giriş:</p>
          <p>İstifadəçi: <strong>{validUsername}</strong></p>
          <p>Şifrə: <strong>{validPassword}</strong></p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;