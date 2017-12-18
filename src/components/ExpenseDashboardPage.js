import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummry from './ExpensesSummry';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummry />
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;