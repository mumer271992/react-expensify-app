import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../actions/expenses';

class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        console.log(expense);
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})
// const AddExpensePage = (props) => (
//     <div>
//         <ExpenseForm 
//             onSubmit={ (expense) => {
//                 console.log(expense);
//                 props.dispatch(addExpense(expense));
//                 props.history.push('/');
//             }}
//         />
//     </div>
// );

export default connect(undefined, mapDispatchToProps)(AddExpensePage);