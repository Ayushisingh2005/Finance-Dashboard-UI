import React, { createContext, useContext, useState, useMemo } from 'react';
import { INITIAL_TRANSACTIONS } from '../data/mockData';

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [role, setRole] = useState('viewer'); // 'admin' or 'viewer'
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  // Derived State for filtering
  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'All' || t.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [transactions, searchTerm, filterCategory]);

  const addTransaction = (newTx) => setTransactions([newTx, ...transactions]);
  const deleteTransaction = (id) => setTransactions(transactions.filter(t => t.id !== id));

  return (
    <FinanceContext.Provider value={{
      transactions, filteredTransactions, role, setRole, 
      searchTerm, setSearchTerm, filterCategory, setFilterCategory,
      addTransaction, deleteTransaction
    }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);