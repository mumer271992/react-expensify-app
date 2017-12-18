import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expense-total';

const ExpenseSummry = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount >= 1 ? 'expenses' : 'expense';
    const formattedTotal = numeral(expenseTotal / 100).format('0,0.0000');
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totaling {formattedTotal}.</h1>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expenseCount: getVisibleExpenses(state.expenses, state.filters).length,
        expenseTotal: getExpensesTotal(state.expenses)
    }
};
export default connect(mapStateToProps)(ExpenseSummry);