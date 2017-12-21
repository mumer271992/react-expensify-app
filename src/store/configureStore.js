import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ExpensesReducer from '../reducers/expenses';
import FiltersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create Store 
export default () => {
    const store = createStore(combineReducers({
        expenses: ExpensesReducer,
        filters: FiltersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
}
