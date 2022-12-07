import React, { useState } from 'react'
import './ExpenseFrom.css'

export default function ExpenseFrom(props) {

          const [entaredTitle,setEnteredTitle] =useState('');
          const [entaredAmount,setEnteredAmount]=useState('');
          const [entaredDate,setEnteredDate]=useState('');
           

        const titleChangeHandler=(event)=>{
          setEnteredTitle(event.target.value)
        }

        const amountChangeHandler=(event)=>{
            setEnteredAmount(event.target.value)
        }

        const dateChangeHandler=(event)=>{
            setEnteredDate(event.target.value)
        }


        const submitHandler=(event)=>{
            event.preventDefault()

            const expenseData={
                title:entaredTitle,
                price:entaredAmount,
                date: new Date(entaredDate)
            }

            setEnteredTitle('')
            setEnteredAmount('')
            setEnteredDate('')

            props.onSaveExpenseDate(expenseData)

            console.log(expenseData)

        }

  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
               <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}  value={entaredTitle}/>
               </div>
               <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.1" step="0.01" onChange={amountChangeHandler}  value={entaredAmount}/>
               </div>
               <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" onChange={dateChangeHandler} value={entaredDate} />
               </div>
        </div>

        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}
