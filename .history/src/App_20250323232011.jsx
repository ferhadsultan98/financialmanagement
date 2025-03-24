// src/App.jsx
import React from 'react';
import './App.scss';
import MainLayout from './Components/Layout/MainLayout';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;