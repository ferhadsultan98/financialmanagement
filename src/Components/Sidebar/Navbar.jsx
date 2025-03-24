// src/components/Sidebar/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaPlusCircle, FaListAlt, FaInfoCircle } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { path: '/', label: 'Əsas', icon: <FaHome /> },
    { path: '/add-expense', label: 'Xərc əlavə et', icon: <FaPlusCircle /> },
    { path: '/expense-details', label: 'Xərc məlumatları', icon: <FaListAlt /> },
    { path: '/about', label: 'Sayt haqqında', icon: <FaInfoCircle /> },
  ];

  return (
    <nav className="sidebar-nav">
      <ul>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} end={item.path === '/'}>
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;