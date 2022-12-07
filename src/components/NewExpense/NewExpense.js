
import React from 'react'
import ExpenseFrom from './ExpenseFrom'
import './NewExpense.css'

export default function NewExpense(props) {

  const saveExpenseDateHandler=(enteredData)=>{
    const expenseData={
      ...enteredData,
      id:Math.random().toString()
    }
    props.onAddExpense (expenseData)
       console.log(expenseData)
  }
  return (
    <div className='new-expense'>
<ExpenseFrom onSaveExpenseDate={saveExpenseDateHandler}/>
    </div>
  )
}
