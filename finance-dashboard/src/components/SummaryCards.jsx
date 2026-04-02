import { useFinance } from '../context/FinanceContext';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

export default function SummaryCards() {
  const { transactions } = useFinance();

  const income = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const expenses = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
  const balance = income - expenses;

  const cards = [
    { title: 'Total Balance', amount: balance, icon: Wallet, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Total Income', amount: income, icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Total Expenses', amount: expenses, icon: TrendingDown, color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {cards.map((card) => (
        <div key={card.title} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className={`${card.bg} p-3 rounded-xl`}>
            <card.icon className={`w-6 h-6 ${card.color}`} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">{card.title}</p>
            <p className="text-2xl font-bold text-slate-900">${card.amount.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}