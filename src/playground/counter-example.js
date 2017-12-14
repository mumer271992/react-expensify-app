class Counter extends React.Component{

    constructor(props){
        super(props);
        this.addOneHandler = this.addOneHandler.bind(this);
        this.minusOneHandler = this.minusOneHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const count = localStorage.getItem('count');
        if(count && !isNaN(count)){
            this.setState( () => ({ count: parseInt(count)}));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }
    addOneHandler(){
        //console.log(this.state.count++);
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    minusOneHandler(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    resetHandler(){
        this.setState((prevState) => {
            return {
                count: 0
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.addOneHandler}>+1</button>
                <button onClick={this.minusOneHandler}>-1</button>
                <button onClick={this.resetHandler}>reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter /> , document.getElementById('app'));




// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterAPp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterAPp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterAPp();
// }

// const DOMElement = document.getElementById('app');

// const renderCounterAPp = () => {
//     const templateTwo = (
//         <div>
//             <h1>count: {count}</h1>
//             <button id="addone-button" onClick={addOne}>+1</button>
//             <button id="minusone-button" onClick={minusOne}>-1</button>
//             <button id="reset-button" onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, DOMElement);
// }

// renderCounterAPp();