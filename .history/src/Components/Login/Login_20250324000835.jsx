// src/components/Login/Login.jsx
import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const validUsername = 'admin';
  const validPassword = 'admin';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      navigate('/'); 
    } else {
      setError('İstifadəçi adı və ya şifrə yanlışdır!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
    
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
            <li>Süni intellekt vasitəsilə xərclərin azaldılması</li>
          </ul>
          <div className="login-left-footer">
            <p>© 2025 Maliyyə İdarəetmə Platforması</p>
          </div>
        </div>


        <div className="login-right">
          <div className="login-box">
            <h2>Daxil Olun</h2>
            <p>Sisteminizə giriş üçün məlumatlarınızı daxil edin</p>

            {error && (
              <div className="error-message">
                {error}
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