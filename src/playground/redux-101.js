import { createStore } from "redux";

// Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ( { decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
});
const reducer = (state = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET': 
            return {
                count: 0
            }
        default: 
            return state;
    }
    return state;
}
const store = createStore(reducer());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({ count: 101 }));
store.dispatch(resetCount());

