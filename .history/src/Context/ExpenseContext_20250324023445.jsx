// src/context/ExpenseContext.jsx
import React, { createContext, useState, useContext } from 'react';

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpense must be used within an ExpenseProvider');
  }
  return context;
};