class VisibilityToogle extends React.Component{
    constructor(props){
        super(props);
        this.toogle = this.toogle.bind(this);
        this.state = {
            showDetails: false
        }
    }

    toogle(){
        this.setState((prevSate) => {
            return {
                showDetails: !prevSate.showDetails
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility Toogle</h1>
                <button onClick={this.toogle}>{this.state.showDetails ? 'Show' : 'Hide'} Details</button>
                {this.state.showDetails && <p>Hey. Here are some details for you</p>}
            </div>
        );
    }
}


ReactDOM.render(<VisibilityToogle />, document.getElementById('app'));
console.log('Got it');

// console.log('Build it visibility practice!');

// const appRoot = document.getElementById('app');
// let isShow = false;

// const toogleShow = () => {
//     isShow = !isShow;
//     console.log(isShow);
//     render();
// }
// const render = () => {
//     const appTemplate = (
//         <div>
//             <h1>Visibility Toogle!</h1>
//             { isShow && <p>Hey. I have some details here.</p>}
//             <button onClick={toogleShow}>{!isShow ? 'Show' : 'Hide'} Details</button>
//         </div>
//     );
//     ReactDOM.render(appTemplate, appRoot);
// }

// render();

