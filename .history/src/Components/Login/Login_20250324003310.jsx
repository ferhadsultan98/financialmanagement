// src/components/Login/Login.jsx
import React, { useState } from "react";
import "../../Styles/Login.scss";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false); // Toggle reset form visibility
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const navigate = useNavigate();

  // Hardcoded credentials
  const validUsername = "admin";
  let validPassword = "admin"; // Mutable for demo purposes

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      if (keepLoggedIn) {
        localStorage.setItem("isLoggedIn", "true");
      }
      navigate("/");
    } else {
      setError("İstifadəçi adı və ya şifrə yanlışdır!");
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (currentPassword !== validPassword) {
      setResetMessage("Cari şifrə yanlışdır!");
      setError("");
    } else if (newPassword !== confirmPassword) {
      setResetMessage("Yeni şifrə ilə təsdiq uyğun gəlmir!");
      setError("");
    } else if (newPassword === "") {
      setResetMessage("Yeni şifrə boş ola bilməz!");
      setError("");
    } else {
      validPassword = newPassword; // Update the valid password
      setResetMessage("Şifrə uğurla dəyişdirildi!");
      setError("");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setShowResetForm(false); // Hide the form after success
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left Section - Financial Management Info */}
        <div className="login-left">
          <h1>Maliyyə İdarəetmə Sistemi</h1>
          <DotLottieReact
            src="https://lottie.host/989ce57f-3547-469f-a4b5-2da1cda19661/BUpz5raRY2.lottie"
            loop
            autoplay
            onClick={()}
          />
          <p>
            Büdcənizi idarə edin, xərclərinizi izləyin və maliyyə hədəflərinizə
            çatmaq üçün ağıllı qərarlar qəbul edin.
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

            {error && <div className="error-message">{error}</div>}

            {resetMessage && (
              <div
                className={
                  resetMessage.includes("uğurla")
                    ? "success-message"
                    : "error-message"
                }
              >
                {resetMessage}
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

              {showResetForm && (
                <div className="reset-password-form">
                  <div className="input-group">
                    <input
                      type="password"
                      placeholder="Cari şifrə"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      placeholder="Yeni şifrə"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      placeholder="Yeni şifrəni təsdiqlə"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="button"
                    className="reset-btn"
                    onClick={handleResetPassword}
                  >
                    Dəyişdir
                  </button>
                </div>
              )}

              <div className="login-options">
                <label className="keep-logged-in">
                  <input
                    type="checkbox"
                    checked={keepLoggedIn}
                    onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  />
                  Məni yadda saxla
                </label>
                <a
                  href="#"
                  className="forgot-password"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowResetForm(!showResetForm);
                    setResetMessage(""); // Clear message when toggling form
                  }}
                >
                  Şifrəmi unutdum
                </a>
              </div>

              <button type="submit">Daxil Ol</button>
            </form>

            <div className="login-info">
              <p>Demo giriş:</p>
              <p>
                İstifadəçi: <strong>{validUsername}</strong>
              </p>
              <p>
                Şifrə: <strong>{validPassword}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
