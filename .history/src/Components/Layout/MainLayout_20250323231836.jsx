// src/components/Layout/MainLayout.jsx
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <Outlet /> {/* This is where routed pages will render */}
      </main>
    </div>
  );
};

export default MainLayout;