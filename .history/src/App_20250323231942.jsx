// src/App.jsx
import React from 'react';
import './App.scss';
import MainLayout from './components/Layout/MainLayout';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;