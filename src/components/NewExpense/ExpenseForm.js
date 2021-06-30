import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	const [showForm, setShowForm] = useState(false);


	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	}

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	}

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	}

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate)
		};

		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
		props.onExpenseSaveData(expenseData);
		setShowForm(false);
	}


	const showFormHandler = () => {
		setShowForm(true);
	}
	const hideFormHandler = () => {
		setShowForm(false);
	}


	const formFields =
		<div className="new-expense__controls">

			<div className="new-expense__control">
				<label>Title</label>
				<input type="text" value={enteredTitle} onChange={titleChangeHandler} />
			</div>

			<div className="new-expense__control">
				<label>Amount</label>
				<input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
			</div>

			<div className="new-expense__control">
				<label>Date</label>
				<input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
			</div>

			<div className="new-expense_actions">
				<button type="button" onClick={hideFormHandler}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>

		</div>

	const addNewExpenseBtn =
		<div className="new-expense_actions_new">
			<button type="button" onClick={showFormHandler}>Add New Expense</button>
		</div>


	return (
		<form onSubmit={submitHandler}>

			{showForm ? formFields : ''}

			{showForm ? '' : addNewExpenseBtn}

		</form>
	);
}

export default ExpenseForm;