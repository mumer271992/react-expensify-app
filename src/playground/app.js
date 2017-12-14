// React components

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : props.options
        }
    }
    componentDidMount(){
        console.log('ComponentDidMount!');
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState( () => ({ options }));
            }
        }
        catch(e){
            // Nothing to do at all
        }

    }
    componentDidUpdate(prevProps, prevState){
        console.log('ComponentDidUpdate!');
        console.log(prevState.options);
        console.log(this.state.options);
        if(prevState.options.length !== this.state.options.length){
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }
    componentWillUnmount(){
        console.log('ComponentWillUnmount!');
    }
    handleDeleteOptions(){
        this.setState(() => ({ options: [] }) );
    }
    handleDeleteOption(option) {
        this.setState( (prevState) => ({
            options: prevState.options.filter( item => item !== option)
        }));
    }
    handlePick(){
        let randIndex = (Math.floor(Math.random() * this.state.options.length));
        alert(this.state.options[randIndex]);
    }
    handleSubmit(option){
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render() {

        const title = 'Indecision!';
        const subtitle = 'Put your life in the hands of computer.';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    );
};

// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h3>{this.props.subtitle}</h3>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <button 
            onClick={props.handlePick} 
            disabled={!props.hasOptions}>
            What should I do?
        </button>
    );
}

// class Action extends React.Component{

//     render(){
//         return (
//             <button 
//                 onClick={this.props.handlePick} 
//                 disabled={!this.props.hasOptions}>
//                 What should I do?
//             </button>
//         );
//     }
// }


const Options = (props) => {
    return (
        <div>
            { props.options.length === 0 && <p>There is no option, please add some.</p>}
            { props.options.length !== 0 && <button onClick={props.handleDeleteOptions}>Remove All</button>}
            {props.options.map((option)=> <Option key={option} optionText={option} removeHandler={props.handleDeleteOption}/>)}
        </div>
    );
};

// class Options extends React.Component{

//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {this.props.options.map((option)=> <Option key={option} optionText={option} />)}
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={
                    () => props.removeHandler(props.optionText)
                }
            >
                remove
            </button>
        </div>
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }
  
class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.submitOption = this.submitOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    submitOption(e){
        e.preventDefault();  
        let option = e.target.elements.addOption.value;
        let error = this.props.handleSubmit(option);
        
    }

    render() {
        return (
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.submitOption}>
                    <input type='text' name='addOption' />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p> Name: {props.name}</p>
//             <p> Age: {props.age}</p>
//         </div>
//     );
// }
 
const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);