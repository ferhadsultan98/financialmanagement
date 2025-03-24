// src/App.jsx
import React from 'react';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { ExpenseProvider } from './Context/ExpenseContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './Languages/i18n';
import router from './Routes';

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <ExpenseProvider>
          <RouterProvider router={router} />
        </ExpenseProvider>
      </I18nextProvider>
    </div>
  );
}

export default App;