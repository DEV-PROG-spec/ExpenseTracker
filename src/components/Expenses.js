import React, { useState } from "react";
//import Card from "./Card";
import "./Expenses.css";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import ExpensesList from "./NewExpense/ExpensesList";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterChange={filterChangeHandler}
      />

      <ExpensesList item={filteredExpense} />

      {/* For dynamically rendering the expense list. */}
      {/* {filteredExpense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}

      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      /> */}
    </div>
  );
}

export default Expenses;
