import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import  './styles/styles.scss';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
const store = configureStore();

// store.dispatch(addExpense({description: 'Water Bill' , amount: 2400 }));
// store.dispatch(addExpense({description: 'Gas Bill' , createdAt: 100}));
// store.dispatch(addExpense({description: 'Rent' , amount: 24000 }));

const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
const appRoot = document.getElementById('app');
ReactDOM.render(jsx , appRoot);