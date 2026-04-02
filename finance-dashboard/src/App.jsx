import { FinanceProvider, useFinance } from './context/FinanceContext';
import SummaryCards from './components/SummaryCards';
import Charts from './components/Charts';
import TransactionTable from './components/TransactionTable';
import { User, ShieldCheck } from 'lucide-react';

function Dashboard() {
  const { role, setRole } = useFinance();

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Finance Dashboard</h1>
            <p className="text-slate-500">Welcome back, track your spending and income below.</p>
          </div>
          
          {/* Role Switcher */}
          <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 flex">
            <button 
              onClick={() => setRole('viewer')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${role === 'viewer' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <User className="w-4 h-4" /> Viewer
            </button>
            <button 
              onClick={() => setRole('admin')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${role === 'admin' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <ShieldCheck className="w-4 h-4" /> Admin
            </button>
          </div>
        </header>

        <SummaryCards />
        <Charts />
        <TransactionTable />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <FinanceProvider>
      <Dashboard />
    </FinanceProvider>
  );
}
