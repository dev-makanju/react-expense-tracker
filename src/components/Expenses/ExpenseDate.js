import './ExpenseDate.css';


const ExpenseDate = (props) => {
   const month =  props.date.toLocaleString('en-US' , {month: 'long'})
   const Year = props.date.getFullYear()
   const day = props.date.toLocaleString('en-US' , {day: '2-digit'})

   return (
      <div className='expense-date__wrapper'>
         <div 
         className='expense-month__wrapper'>
            { month }
         </div>
         <div 
         className='expense-year__wrapper'>
            { Year }
            </div>
         <div 
         className='expense-day__wrapper'>
            { day }
         </div>
      </div>
   )
}

export default ExpenseDate;