// src/components/Sidebar/Sidebar.jsx
import React, { useState } from 'react';
import '../../Styles/Sidebar.scss';
import Navbar from './Navbar';
import ProfileModal from './ProfileModal';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import UserProfileIcon from '../../assets/user.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [topUpAmount, setTopUpAmount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({
    firstName: 'Ad',
    lastName: 'Soyad',
    birthDate: '1990-01-01',
    gender: 'Kişi',
  });
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
    navigate('/login');
  };

  const handleProfileUpdate = (updatedProfile) => {
    setUserProfile(updatedProfile);
    setIsModalOpen(false);
  };

  return (
    <div className="sidebar-container">
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div
            className="profile-img"
            onClick={() => setIsModalOpen(true)}
          >
            <img src={UserProfileIcon} alt="Profile" />
            <div className="profile-overlay">
              <span>Profilə bax</span>
            </div>
          </div>
          <h3>{`${userProfile.firstName} ${userProfile.lastName}`}</h3> {/* Dynamic name */}
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
            <button onClick={handleTopUp}>
              Artır
            </button>
          </div>
        </div>

        <Navbar />

        <div className="sidebar-footer">
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            <FaSignOutAlt /> Çıxış
          </button>
        </div>
      </div>

      {isModalOpen && (
        <ProfileModal
          userProfile={userProfile}
          onSave={handleProfileUpdate}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;