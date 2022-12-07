import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../Ul/Card'
import React from 'react'

function Expenses(props){



    return (
        <>
        <Card className='expense'>
{
    //iterating data from array of object
    props.item.map((expense)=>(<ExpenseItem 
    key={expense.id}
    title={expense.title}
    price={expense.price}
    date={expense.date}/>))
}

{/*      
        <ExpenseItem title={props.item[0].title} price={props.item[0].amount} date={props.item[0].date}/>  
        <ExpenseItem title={props.item[1].title} price={props.item[1].amount} date={props.item[1].date}/>   
        <ExpenseItem title={props.item[2].title} price={props.item[2].amount} date={props.item[2].date}/>   */}
        </Card>
        </>
       )
}

export default Expenses