import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editExpense, setEditExpense] = useState(false);

  const editExpenseHandler = () => {
    setEditExpense(true);
  };

  const stopEditingFormHandler = () => {
    setEditExpense(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditExpense(false);
  };

  return (
    <div className="new-expense">
      {!editExpense && (
        <button onClick={editExpenseHandler}>Add New Expenses</button>
      )}
      {editExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingFormHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
