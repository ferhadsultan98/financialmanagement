// src/components/Sidebar/ProfileModal.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../Styles/Sidebar.scss';

const ProfileModal = ({ userProfile, onSave, closeModal }) => {
  const [formData, setFormData] = useState({ ...userProfile }); // Initialize with passed profile data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData); // Pass updated data back to Sidebar
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="modal-overlay">
      <motion.div
        className="profile-modal"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <h2>Profil Redaktəsi</h2>

        <div className="modal-content">
          <div className="form-group">
            <label>Ad</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Soyad</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Doğum Tarixi</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Cins</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="Kişi">Kişi</option>
              <option value="Qadın">Qadın</option>
              <option value="Digər">Digər</option>
            </select>
          </div>
        </div>

        <div className="modal-actions">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
            className="save-btn"
          >
            Yadda Saxla
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={closeModal}
            className="close-btn"
          >
            Bağla
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileModal;