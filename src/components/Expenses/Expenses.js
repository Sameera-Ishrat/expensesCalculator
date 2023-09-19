import ExpenseItem from "./ExpenseItem"
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    const [filteredYear , setFilteredYear] = useState('2020');

const filterChangeHandler = (selectedYear) => {
setFilteredYear(selectedYear);
}

// // Now filter the expenses based on the year selected

const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

//   let expensesContent = <p>No expenses found.</p>;

//   if (filteredExpenses.length > 0) {
//     expensesContent = filteredExpenses.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date}
//       />
//     ));
//   }


    return (
        <Card className="expenses">
            <ExpenseFilter onFilterChange = {filterChangeHandler} defaultYear = {filteredYear} />

            <ExpensesList items={filteredExpenses} />

{/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
{filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
    <ExpenseItem
    key={expense.id}
    title={expense.title} 
    amount={expense.amount}
     date={expense.date} 
     />
  ))
} */}

{/* {props.items.map((expense) => (
        <ExpenseItem
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}
         date={expense.date} 
         />
      ))} */}
{/* 
   {filteredExpenses.map((expense) => (
        <ExpenseItem
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}
         date={expense.date} 
         />
      ))} */}
      {/* {expensesContent} */}

        </Card>
    )
}

export default Expenses

