import './ExpenseItem.css'
import ExpenseDate  from './ExpenseDate';
import Card from '../UI/Card'
import React from 'react';

const ExpenseItem = (props) => {

   return (
      <Card className='expense-item'>
          <ExpenseDate date={props.date}/>
          <div className='expence-item__description'>
             <h2>{props.title}</h2>
             <div className="expence-item__price">${props.price}</div>
          </div>
      </Card>
   )
}

export default ExpenseItem;