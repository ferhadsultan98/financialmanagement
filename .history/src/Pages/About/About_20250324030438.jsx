// src/Pages/About/About.jsx
import React from 'react';
import '../../Styles/About.scss';
import Logo from '../../assets/logo.png'; // Adjust path to your logo

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src={Logo} alt="Sayt Logosu" className="site-logo" />
        <h1>Maliyyə İdarəetmə Sistemi</h1>
      </div>
      <div className="about-content">
        <p>
          Maliyyə İdarəetmə Sistemi, büdcənizi effektiv idarə etmək, xərclərinizi izləmək və maliyyə hədəflərinizə çatmaq üçün hazırlanmış müasir bir platformadır. İstifadəçi dostu interfeysi və güclü funksionallığı ilə maliyyənizi nəzarətdə saxlamaq heç vaxt bu qədər asan olmamışdı.
        </p>
        <ul className="features-list">
          <li>Real vaxt rejimində balans izləmə</li>
          <li>Xərc və gəlir qeydləri</li>
          <li>Şəxsi profil idarəetmə</li>
          <li>Excel ilə inteqrasiya</li>
          <li>Təhlükəsiz və sadə giriş sistemi</li>
        </ul>
        <div className="about-footer">
          <p>© 2025 Maliyyə İdarəetmə. Bütün hüquqlar qorunur.</p>
          <p>Əlaqə: <a href="mailto:info@maliyyeidareetme.com">info@maliyyeidareetme.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;