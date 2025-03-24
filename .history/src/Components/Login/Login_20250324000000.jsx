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

  // Hardcoded credentials
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
      <div className="login-wrapper">
        {/* Left Section - Financial Management Info */}
        <motion.div
          className="login-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h1>Maliyyə İdarəetmə Sistemi</h1>
          <p>
            Büdcənizi idarə edin, xərclərinizi izləyin və maliyyə hədəflərinizə çatmaq üçün ağıllı
            qərarlar qəbul edin.
          </p>
          <ul>
            <li>Real vaxt rejimində balans izləmə</li>
            <li>Xərc və gəlir qeydləri</li>
            <li>Şəxsi profil idarəetmə</li>
          </ul>
          <div className="login-left-footer">
            <p>© 2025 Maliyyə İdarəetmə</p>
          </div>
        </motion.div>

        {/* Right Section - Login Form */}
        <motion.div
          className="login-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="login-box">
            <h2>Daxil Olun</h2>
            <p>Sisteminizə giriş üçün məlumatlarınızı daxil edin</p>

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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;