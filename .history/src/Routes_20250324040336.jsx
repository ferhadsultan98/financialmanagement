// src/routes.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Home from './Pages/Home/Home';
import AddExpense from './Pages/AddExpense/AddExpense';
import ExpenseDetails from './Pages/ExpenseDetails/ExpenseDetails';
import About from './Pages/About/About';
import Login from './Components/Login/Login';
import i18n from './i18n'; // Import i18n to access current language

// Supported languages
const supportedLanguages = ['az', 'en', 'ru'];

// Function to create routes with language prefix
const createRoutes = () => {
  return createBrowserRouter([
    // Redirect root (/) to default language (/az)
    {
      path: '/',
      element: <Navigate to={`/${i18n.language || 'az'}`} replace />,
    },
    // Language-specific routes
    {
      path: '/:lang',
      children: [
        {
          path: 'login',
          element: <Login />,
        },
        {
          element: <MainLayout />,
          children: [
            {
              index: true, // Handles /:lang directly
              element: <Home />,
            },
            {
              path: 'add-expense',
              element: <AddExpense />,
            },
            {
              path: 'expense-details',
              element: <ExpenseDetails />,
            },
            {
              path: 'about',
              element: <About />,
            },
          ],
        },
        // Redirect invalid language to default (az)
        {
          path: '*',
          element: <Navigate to="/az" replace />,
        },
      ],
      // Validate language parameter
      loader: ({ params }) => {
        const { lang } = params;
        if (!supportedLanguages.includes(lang)) {
          return { redirect: '/az' }; // Redirect to default if language is invalid
        }
        i18n.changeLanguage(lang); // Sync i18n language with route
        return null;
      },
    },
  ]);
};

export default createRoutes();