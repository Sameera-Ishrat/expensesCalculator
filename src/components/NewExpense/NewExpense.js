import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
const [isEditing , setIsEditing] = useState(false);


const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id:Math.random().toString()
    }
   // console.log(expenseData);
   props.onAddExpense(expenseData);
}

const startEditingHandler = () => {
setIsEditing(true);
}

const stopEditingHandler = () => {
    setIsEditing(false);
}
    return (
        <div className="new-expense">
   {!isEditing && <button onClick = {startEditingHandler}>Add New Expense Form</button>}         
    {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler} /> }      
        </div>
    )
}

export default NewExpense
