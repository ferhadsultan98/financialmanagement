// src/routes.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Home from './Pages/Home/Home';
import AddExpense from './Pages/AddExpense/AddExpense';
import ExpenseDetails from './Pages/ExpenseDetails/ExpenseDetails';
import About from './Pages/About/About';
import Login from './Components/Login/Login';

const router = createBrowserRouter([
  {
    path: '/:lang/login',
    element: <Login />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/:lang',
        element: <Home />,
      },
      {
        path: '/:lang/add-expense',
        element: <AddExpense />,
      },
      {
        path: '/:lang/expense-details',
        element: <ExpenseDetails />,
      },
      {
        path: '/:lang/about',
        element: <About />,
      },
    ],
  },
  // Redirect root to /az
  {
    path: '/',
    element: <Navigate to="/az" replace />,
  },
  // Redirect invalid paths to /az
  {
    path: '*',
    element: <Navigate to="/az" replace />,
  },
]);

export default router;