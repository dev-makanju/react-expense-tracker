import { useState } from 'react';
import NewExpense from '../NewExpense/NewExpense';
import ExpenseFilter from './ExpenseFilter';
import './Expense.css'
import Expenseslist from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const DUMMY_EXPENSES = [
   { 
     id:'e1', 
     title:'Jeans', 
     price:238, 
     date: new Date(2020, 3, 4)
   },
   { 
     id:'e2', 
     title:'Shoes', 
     price:534, 
     date: new Date(2021, 2, 4),
   },
   { 
     id:'e3', 
     title:'Shoes', 
     price:334, 
     date: new Date(2022, 3, 5),
   },
   { 
     id:'e4', 
     title:'Cloth',
     price:223 , 
     date: new Date(2022, 5, 6),
   }
];

const Expense = () => {
   const [ expenses , setExpenses] = useState(DUMMY_EXPENSES)

   const [ filteredYear , setFilteredYear ] = useState('2020')

   const newExpenseHandler = (newExpenseData) => {
      //more cleaner way when its based on updating an older snapshot
      setExpenses( prevExpenseState => {
         return [newExpenseData , ...prevExpenseState]
      })
   }

   const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear)
   }

   const filteredExpense = expenses.filter(expense => {
       return expense.date.getFullYear().toString() === filteredYear
   })         

   return (
      <div className="expense-wrapper-main">
         <ExpenseChart expenses={filteredExpense}/>
         <NewExpense onAddNewExpense={newExpenseHandler} />
         <ExpenseFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler} 
         />
         <Expenseslist items={filteredExpense}/>
      </div>
   )
}

export default Expense;