import { useState } from 'react'
import '../NewExpense/ExpenseForm.css'

const ExpenseForm = (props) => {
   
   const [enteredTitle , setEnteredTitle ] = useState('')
   const [enteredAmount , setEnteredAmount ] = useState('')
   const [enteredDate , setEnteredDate ] = useState('')

   const titleChangeHandler = (e) => {
      setEnteredTitle(e.target.value)
   }
   const amountChangeHandler = (e) => {
      setEnteredAmount(e.target.value)
   }
   const dateChangeHandler = (e) => {
      setEnteredDate(e.target.value)
   }

   const submitHandler = (e) => {
      e.preventDefault();

      const expenseData = {
         title: enteredTitle,
         amount: enteredAmount,
         date: new Date(enteredDate)
      }

      props.onSaveExpenseData(expenseData)
      
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('')
   }


   return(
      <form onSubmit={submitHandler}>
         <div className="form-control">
            <div className="form-control input">
               <label>Title</label>
               <input type="text"
               value={enteredTitle} 
               onChange={titleChangeHandler}/>
            </div>
            <div className="form-control input">
               <label>Amount</label>
               <input type="number" 
               min="0.01" step="0.01" 
               value={enteredAmount}
               onChange={amountChangeHandler}/>
            </div>
            <div className="form-control input">
               <label>Date</label>
               <input type="date"
                min="2019-01-01" 
                max="2019-12-31" 
                value={enteredDate}
                onChange={dateChangeHandler}/>
            </div>
         </div>
         <div className="form-control__actions">
            <button type="submit">submit</button>
         </div>
      </form>
   )
}

export default ExpenseForm;