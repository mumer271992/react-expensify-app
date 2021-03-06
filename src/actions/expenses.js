import uuid from 'uuid';
import database from '../firebase/firebase';
// Action generator function for expenses
// Add Expense

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        })
    }
}

// Remove Expense

export const removeExpense = ( { id } = {}) => ({
type: 'REMOVE_EXPENSE',
expense: {
    id
}
})

// Edit Expense

export const editExpense = (id, updates) => ({
type: 'EDIT_EXPENSE',
id,
updates
});

// SET EXPENSES

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// SET START SET EXPENSES

export const startSetExpenses = () =>  {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((dataSnapshot) => {
            const expenses = [];
            dataSnapshot.forEach(element => {
                expenses.push({
                    id: element.key,
                    ...element.val()
                });
            });
            dispatch(setExpenses(expenses));
        })
    }
}
