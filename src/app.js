import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import  './styles/styles.scss';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';
import { firebase, googleAuthProvider } from './firebase/firebase';
import { hostname } from 'os';

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
let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        store.dispatch(startSetExpenses()).then(() => {
            ReactDOM.render(jsx , appRoot);
        });
    }
}
ReactDOM.render(<p>Loading...</p> , appRoot);


firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log('Log in');
        renderApp();
        if(history.location === '/'){
            history.push('/dashboard');
            hasRendered = true;
        }

    }else {
        console.log('Log out');
        renderApp();
        history.push('/');
    }
});