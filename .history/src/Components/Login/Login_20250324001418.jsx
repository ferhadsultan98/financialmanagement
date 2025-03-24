// src/components/Login/Login.jsx
import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false); // State for "Keep me logged in"
  const [newPassword, setNewPassword] = useState(''); // State for new password
  const navigate = useNavigate();

  // Hardcoded credentials
  const validUsername = 'admin';
  let validPassword = 'admin'; // Let it be mutable for demo purposes

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      if (keepLoggedIn) {
        // Simulate keeping user logged in (e.g., with localStorage)
        localStorage.setItem('isLoggedIn', 'true');
      }
      navigate('/'); // Redirect to main app after login
    } else {
      setError('İstifadəçi adı və ya şifrə yanlışdır!');
    }
  };

  const handleForgotPassword = () => {
    // Generate a simple random password (for demo purposes)
    const newPass = Math.random().toString(36).slice(-8); // 8-character random string
    validPassword = newPass; // Update the valid password dynamically
    setNewPassword(`Yeni şifrəniz: ${newPass}`);
    setPassword(''); // Clear the password input
    setError(''); // Clear any existing error
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left Section - Financial Management Info */}
        <div className="login-left">
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
        </div>

        {/* Right Section - Login Form */}
        <div className="login-right">
          <div className="login-box">
            <h2>Daxil Olun</h2>
            <p>Sisteminizə giriş üçün məlumatlarınızı daxil edin</p>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            {newPassword && (
              <div className="new-password-message">
                {newPassword}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="İstifadəçi adı"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  placeholder="Şifrə"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="login-options">
                <label className="keep-logged-in">
                  <input
                    type="checkbox"
                    checked={keepLoggedIn}
                    onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  />
                  Məni yadda saxla
                </label>
                <a href="#" className="forgot-password" onClick={handleForgotPassword}>
                  Şifrəmi unutdum
                </a>
              </div>

              <button type="submit">
                Daxil Ol
              </button>
            </form>

            <div className="login-info">
              <p>Demo giriş:</p>
              <p>İstifadəçi: <strong>{validUsername}</strong></p>
              <p>Şifrə: <strong>{validPassword}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;