import React from 'react';
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import History from './components/History'
import AddTransaction from './components/AddTransaction'
import './App.css'
function App() {
  return (
    <div className="container">
        <h1>Expense Tracker</h1>
        <Balance/>    
        <IncomeExpense/>    
        <History/>
        <AddTransaction/>    
    </div>
  );
}

export default App;
