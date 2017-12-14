import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { stat } from 'fs';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <h3>Edit Expense</h3>
            This is my expense edit component with id of  {props.match.params.id}
            <ExpenseForm
                expense={props.expense}
                onSubmit={ (expense)=> {
                    console.log(expense);
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push("/");
                }} 
            /> 
            <button onClick={
                () => {
                    props.dispatch(removeExpense({id:props.expense.id}));
                    props.history.push("/");
                }
            }>Remove</button>
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage); 