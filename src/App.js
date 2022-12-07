import Expenses from "./components/Expenses/Expenses";
import React,{useState,useEffect}from "react";
import NewExpense from "./components/NewExpense/NewExpense";


let DUMMY_expense =[]

function App() {

  const [expenses,setExpenses]=useState(DUMMY_expense)


function fetchData(){
  fetch('http://localhost:3000/Info').then(
    response =>{
    return response.json();
    }
  )
  .then(
      data => {
      console.log(data)
      setExpenses(data)
    }
  )

}

  useEffect(()=>{
    fetchData()
},[])

  
const addExpenseHandler=(expense)=>{
 fetch('http://localhost:3000/Info',{
  method:'POST',
  body:JSON.stringify(expense),
  headers:{
    'content-Type' :'application/json'
  }
}).then(
  response =>{
      fetchData()
  }
)

}

return(
  <>
  <NewExpense onAddExpense={addExpenseHandler}/>
  <Expenses item={expenses}/>
  </>
)

 
}

export default App;
