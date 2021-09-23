import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    setIsEditing(false);
    props.onAddExpense(expenseData);
  };
  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  let form = <button onClick={startEditingHandler}> Add New Expense </button>;

  if (isEditing) {
    form = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditing={stopEditingHandler} />
  }

  return (
    <div className='new-expense'>
      {form}
    </div>
  );
};

export default NewExpense;
