import '../components/ExpenseItem.css'
import ExpenseDate  from './ExpenseDate';

function ExpenseItem(props){
   return (
      <div className='expence-item'>
          <ExpenseDate date={props.date}/>
          <div className='expence-item__description'>
             <h2>{props.title}</h2>
             <div className="expence-item__price">${props.price}</div>
          </div>
      </div>
   )
}

export default ExpenseItem;