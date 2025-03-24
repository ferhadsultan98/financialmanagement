// src/routes.jsx
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Home from './Pages/Home/Home';
import AddExpense from './Pages/AddExpense/AddExpense';


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/add-expense',
        element: <AddExpense />
      },
      {
        path: '/expense-details',
        element: <ExpenseDetai />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
]);

export default router;