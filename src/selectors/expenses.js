import moment from 'moment';
//get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    console.log(sortBy);
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
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
export default getVisibleExpenses;