import ExpenseItem from "./ExpenseItem"

const Expenseslist = (props) => {
   if(props.items.length === 0 ){
      return <h2>Found no expenses</h2>
   }

   return  (
      <ul>
         {
            props.items.map( (expense) => (
               <ExpenseItem 
                  key={expense.id}
                  title={expense.title}
                  price={expense.price}
                  date={expense.date}
               /> 
            ))
         }
      </ul>
   )
}

export default Expenseslist