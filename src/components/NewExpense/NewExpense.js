import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
   const savedExpenseDataHandler = (enteredData) => {
      const expenseData = {
         ...enteredData,
         id: Math.random().toString()
      }
      props.onAddNewExpense(expenseData)
   }

   return (
      <div> 
         <ExpenseForm onSaveExpenseData={savedExpenseDataHandler}/>
      </div>
   )
}

export default NewExpense