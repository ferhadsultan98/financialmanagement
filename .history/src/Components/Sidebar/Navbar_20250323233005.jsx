// src/components/Sidebar/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

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
        {navItems.map((item, index) => (
          <motion.li
            key={item.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink to={item.path} end={item.path === '/'}>
              {item.label}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;