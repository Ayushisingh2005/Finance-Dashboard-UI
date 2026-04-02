import { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import { Trash2, Search, PlusCircle } from 'lucide-react';
import TransactionModal from './TransactionModal';

export default function TransactionTable() {
  const { filteredTransactions, deleteTransaction, role, searchTerm, setSearchTerm, filterCategory, setFilterCategory } = useFinance();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Food', 'Housing', 'Transport', 'Entertainment', 'Income'];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-12">
      {/* Header with Search and Admin Button */}
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-slate-800 text-lg">Recent Transactions</h3>
          <p className="text-xs text-slate-400 mt-1">
            {role === 'admin' ? 'Admin Mode: You can add or delete entries.' : 'Viewer Mode: Read-only access.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Admin Only Button */}
          {role === 'admin' && (
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm"
            >
              <PlusCircle className="w-4 h-4" /> Add Transaction
            </button>
          )}

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..." 
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm w-full md:w-auto"
            />
          </div>
          
          <select 
            value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none bg-white cursor-pointer"
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4 text-right">Amount</th>
              {role === 'admin' && <th className="px-6 py-4 text-center">Action</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredTransactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 text-sm text-slate-500">{tx.date}</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-900">{tx.description}</td>
                <td className="px-6 py-4">
                   <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase font-bold rounded-md">{tx.category}</span>
                </td>
                <td className={`px-6 py-4 text-sm font-bold text-right ${tx.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {tx.type === 'income' ? '+' : '-'}${tx.amount.toLocaleString()}
                </td>
                {role === 'admin' && (
                  <td className="px-6 py-4 text-center">
                    <button 
                      onClick={() => deleteTransaction(tx.id)} 
                      className="text-slate-300 hover:text-rose-600 transition-colors p-2"
                      title="Delete Entry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {filteredTransactions.length === 0 && (
          <div className="p-16 text-center">
            <p className="text-slate-400 text-sm italic">No matching transactions found.</p>
          </div>
        )}
      </div>

      {/* Modal - only renders when open */}
      {isModalOpen && <TransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}