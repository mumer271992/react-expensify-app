import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import { stat } from 'fs';
//Defaut State Values

const expenseDefaultValue = [];

// Expenes Reducer
const ExpensesReducer = (state = expenseDefaultValue,   action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'EDIT_EXPENSE': 
            return state.map( (expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else {
                    return expense;
                }
            });
        case 'REMOVE_EXPENSE': 
            return state.filter( (expense) => expense.id !== action.expense.id)
        default:
            return state;
    }
};
// Filters Reducer
const filtersDefaultValue = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const FiltersReducer = ( state = filtersDefaultValue, action) => {
    switch(action.type){
        case 'SET_TEXT': 
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount' 
            }
        case 'SET_START_DATE': 
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state;
    }
};


/// Expensify store

// Action generator function for expenses

// Add Expense

const addExpense = ( {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// Remove Expense

const removeExpense = ( { id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
})

// Edit Expense

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// Set Text

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

//get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    console.log(sortBy);
    return expenses.filter((expense) => {
        const startDateMatch = (typeof startDate !== 'number') || (expense.createdAt >= startDate);
        const endDateMatch = (typeof endDate !== 'number') || (expense.createdAt <= endDate);
        const textmatch = (typeof text !== 'string') || !text || (expense.description.toLowerCase().includes(text.toLowerCase()));

        return startDateMatch && endDateMatch && textmatch;
    }).sort((a, b) => {
        console.log(sortBy);
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1; 
        }
    });
}


// Create Store 

const store = createStore(combineReducers({
    expenses: ExpensesReducer,
    filters: FiltersReducer
}));

store.subscribe( () => {
    console.log();
    const state = store.getState();
    console.log(state.filters);
    console.log(getVisibleExpenses(state.expenses, state.filters));
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent' , amount: 2400 , createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Electricity Bill' , amount: 2500 , createdAt: -1000 }));
// store.dispatch(removeExpense( {id: expenseOne.expense.id} ));
// store.dispatch(editExpense( expenseTwo.expense.id , { amount: 500 }));
//store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
//store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'asdasdasd',
        description: 'December Rent',
        note: 'This was the final payment for that address',
        amount: 24000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

