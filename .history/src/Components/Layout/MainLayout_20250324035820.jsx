// src/components/Layout/MainLayout.jsx
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import '../../Styles/MainLayout.scss'

const MainLayout = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <Outlet /> 
      </main>
     
    </div>
  );
};

export default MainLayout;