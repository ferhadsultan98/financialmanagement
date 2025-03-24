// src/components/Sidebar/Sidebar.jsx
import React, { useState } from 'react';
import './Sidebar.scss';
import Navbar from './Navbar';
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [topUpAmount, setTopUpAmount] = useState('');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleTopUp = () => {
    if (topUpAmount) {
      setBalance(prev => prev + parseFloat(topUpAmount));
      setTopUpAmount('');
    }
  };

  return (
    <div className="sidebar-container">
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="profile-img">
            <img src="https://via.placeholder.com/80" alt="Profile" />
          </div>
          <h3>Ad Soyad</h3>
          <div className="balance">
            Balans: <span>{balance.toFixed(2)} ₼</span>
          </div>
          
          <div className="top-up">
            <input
              type="number"
              placeholder="Məbləğ daxil et"
              value={topUpAmount}
              onChange={(e) => setTopUpAmount(e.target.value)}
            />
            <button onClick={handleTopUp}>Artır</button>
          </div>
        </div>

        <Navbar />

        <div className="sidebar-footer">
          <button className="logout-btn">Çıxış</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;