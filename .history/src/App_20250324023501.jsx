// src/App.jsx
import React from 'react';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { ExpenseProvider } from './context/ExpenseContext';

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