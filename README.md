 ## 📊 Finance Dashboard UI - Frontend Assessment
A clean, interactive, and responsive financial management dashboard built for the Frontend Developer Intern screening. This application allows users to track financial summaries, explore transactions, and understand spending patterns through data visualization.
🚀 Live Demo
(Optional: If you deploy to Vercel/Netlify, put the link here)
✨ Features
1. Dashboard Overview
Summary Cards: Real-time calculation of Total Balance, Income, and Expenses.
Data Visualization:
Balance Trend (Area Chart): Time-based visualization of financial activity.
Spending Breakdown (Pie Chart): Categorical breakdown of expenses.
2. Transaction Management
Interactive Table: View date, description, category, and amount for all transactions.
Search & Filter: Instant client-side searching and category filtering.
Dynamic Styling: Color-coded amounts (Green for Income, Red for Expense) for better readability.
3. Role-Based UI (RBAC Simulation)
Viewer Mode: Read-only access to the dashboard and transactions.
Admin Mode: Full access to Add new transactions via a modal and Delete existing entries.
Role Switcher: A simple toggle in the header to demonstrate different UI behaviors.
4. Responsive Design
Fully optimized for Mobile, Tablet, and Desktop using Tailwind’s mobile-first grid system.
🛠️ Tech Stack
Framework: React.js (Vite)
Styling: Tailwind CSS (Rapid, utility-first UI)
Icons: Lucide React (Clean, consistent iconography)
Charts: Recharts (Composable charting library)
State Management: React Context API
🏗️ Technical Approach & Decisions
📂 Architecture
I chose a modular component-based architecture. By separating the SummaryCards, Charts, and TransactionTable into independent components, the codebase remains scalable and easy to maintain.
🧠 State Management
I implemented the React Context API (FinanceContext.jsx) to handle global state. This avoids "prop drilling" and allows the Role (Admin/Viewer) and the Transaction list to be accessed effortlessly by any component in the tree.
⚡ Performance Optimization
useMemo: I used the useMemo hook to handle filtering and searching. This ensures that expensive filter operations only re-run when the search term or transaction list actually changes, keeping the UI snappy.
Tailwind: Used Tailwind CSS to keep the bundle size small and ensure design consistency without writing hundreds of lines of custom CSS.
🎨 Design Philosophy
The UI follows a modern "FinTech" aesthetic:
A clean Slate and Indigo color palette.
High contrast for financial figures.
Subtle shadows and rounded corners (2xl) for a professional, "app-like" feel.
🏁 Getting Started
Clone the repository:
``` bash
git clone <your-repo-link>
```
Install dependencies:
``` bash
npm install
```
Run the development server:
``` bash
npm run dev
```
Build for production:
``` bash
npm run build
```
📝 Assumptions & Notes
Mock Data: The app starts with a set of hardcoded transactions to demonstrate functionality immediately.
Data Persistence: Currently, data is stored in the application state. 
Developed by: Ayushi Singh
