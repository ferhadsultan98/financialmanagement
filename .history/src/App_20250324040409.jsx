// src/App.jsx
import React, { useMemo } from 'react';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import createRoutes from './routes'; // Import as a function
import { ExpenseProvider } from './context/ExpenseContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  // Recreate router when language changes
  const router = useMemo(() => createRoutes(), [i18n.language]);

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