// src/App.jsx
import React from 'react';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import router from './';
import { ExpenseProvider } from './Context/ExpenseContext';

function App() {
  return (
    <div className="App">
      <ExpenseProvider>
        <RouterProvider router={router} />
      </ExpenseProvider>
    </div>
  );
}

export default App;