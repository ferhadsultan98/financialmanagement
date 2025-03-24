// src/App.jsx
import React from 'react';
import './App.scss';
import { RouterProvider } from 'react-router-dom';

import { ExpenseProvider } from './Context/ExpenseContext';
import router from './Routes';

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