import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

	const [filteredYear, setFilteredYear] = useState('2021');

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});



	const filterChangeHander = (selectedYear) => {
		setFilteredYear(selectedYear);
		// console.log(filteredYear); // will give delayed value
	};
	// console.log(filteredYear); // will give live value



	return (
		<div>
			<Card className="expenses">

				<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHander} />
				<ExpensesChart expenses={filteredExpenses} />
				<ExpenseList items={filteredExpenses} />

			</Card>
		</div>


	);
}

export default Expenses;