// src/components/Sidebar/Sidebar.jsx
import React, { useState } from 'react';
import '../../Styles/';
import Navbar from './Navbar';
import ProfileModal from './ProfileModal'; // Import the new modal
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [topUpAmount, setTopUpAmount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleTopUp = () => {
    if (topUpAmount) {
      setBalance(prev => prev + parseFloat(topUpAmount));
      setTopUpAmount('');
    }
  };

  const handleLogout = () => {
    navigate('/login'); // Redirect to login on logout
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <div className="sidebar-container">
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <motion.div
        className={`sidebar ${isOpen ? 'open' : ''}`}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="sidebar-header">
          <motion.div
            className="profile-img"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => setIsModalOpen(true)} // Open modal on click
          >
            <img src="https://via.placeholder.com/80" alt="Profile" />
            <div className="profile-overlay">
              <span>Profilə bax</span>
            </div>
          </motion.div>
          <h3>Ad Soyad</h3>
          <div className="balance">
            Balans: <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {balance.toFixed(2)} ₼
            </motion.span>
          </div>

          <motion.div className="top-up" whileHover={{ scale: 1.02 }}>
            <input
              type="number"
              placeholder="Məbləğ daxil et"
              value={topUpAmount}
              onChange={(e) => setTopUpAmount(e.target.value)}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTopUp}
            >
              Artır
            </motion.button>
          </motion.div>
        </div>

        <Navbar />

        <div className="sidebar-footer">
          <motion.button
            className="logout-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleLogout} // Logout functionality
          >
            <FaSignOutAlt /> Çıxış
          </motion.button>
        </div>
      </motion.div>

      {isModalOpen && (
        <ProfileModal closeModal={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Sidebar;