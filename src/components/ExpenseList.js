import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expense-total';

const ExpenseList = (props) => (
    <div>
        <h1>Expenses List {props.total}</h1>
        {
            props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense} />))
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
        total: getExpensesTotal(state.expenses)
    }
};

export default connect(mapStateToProps)(ExpenseList);
