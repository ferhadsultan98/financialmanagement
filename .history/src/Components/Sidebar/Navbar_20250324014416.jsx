// src/components/Sidebar/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { path: '/', label: 'Əsas' },
    { path: '/add-expense', label: 'Xərc əlavə et' },
    { path: '/expense-details', label: 'Xərc məlumatları' },
    { path: '/about', label: 'Sayt haqqında' },
  ];

  return (
    <nav className="sidebar-nav">
      <ul>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} end={item.path === '/'}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;