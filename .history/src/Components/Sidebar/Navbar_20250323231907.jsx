// src/components/Sidebar/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sidebar-nav">
      <ul>
        <li>
          <NavLink to="/" end>Əsas</NavLink>
        </li>
        <li>
          <NavLink to="/add-expense">Xərc əlavə et</NavLink>
        </li>
        <li>
          <NavLink to="/expense-details">Xərc məlumatları</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sayt haqqında</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;