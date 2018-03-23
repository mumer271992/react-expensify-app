import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ?  moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    descriptionChangeHandler = (e) => {
        e.persist();
        console.log(e.target.value);
        this.setState((prevState) => ({
            description: e.target.value
        }));
    }
    amountChangeHandler = (e) => {
        e.persist();
        let amount = e.target.value;
        console.log(amount);
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState((prevState) => ({
                amount: e.target.value
            }));
        }
    }
    noteChangeHandler = (e) => {
        e.persist();
        console.log(e.target.value);
        this.setState((prevState) => ({
            note: e.target.value
        }));
    }

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }));
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error: 'Please provide description and amount.'}));
        } else {
            this.setState(() => ({error: ''}));
            console.log('Submited');
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Expense Form</h1>
                <form
                    onSubmit={this.onSubmit} 
                >
                    {this.state.error && <p>{this.state.error}</p>}
                    <input 
                        type="text"
                        placeholder="description"
                        value={this.state.description}
                        onChange={this.descriptionChangeHandler}
                        autoFocus
                    />
                    <input 
                        type="number"
                        placeholder="amount" 
                        value={this.state.amount}
                        onChange={this.amountChangeHandler}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
                        focused={this.state.calendarFocused} // PropTypes.bool
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        rows="6" 
                        cols="100"
                        placeholder="add a note for your expense(optional)"
                        value={this.state.note}
                        onChange={this.noteChangeHandler}
                    >
                    </textarea>
                    <button type="submit">Add Expense</button>
                </form>
            </div>
        );
    }
}