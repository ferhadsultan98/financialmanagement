// src/routes.jsx
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Components';
import Home from './pages/Home';
import AddExpense from './pages/AddExpense';
import ExpenseDetails from './pages/ExpenseDetails';
import About from './pages/About';

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
        element: <ExpenseDetails />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
]);

export default router;