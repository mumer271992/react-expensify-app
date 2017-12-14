console.log("App is Running!");

// JSX -- Javascript XML

const app = {
    title: "Indecision App! ",
    subtitle: "Put your life in the hands of computer!",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.option.value);
    const newoption = e.target.elements.option.value;
    if(newoption){
        app.options.push(newoption);
        e.target.elements.option.value = '';
        render();
    }
    console.log(app.options.length);
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const displayOptions = () => {
    return app.options.map((number) => <li key={number}>{number}</li>);
}

const onMakeDecision = () => {
    let selectedIndex = Math.floor(Math.random() * app.options.length);
    let selectedOption = app.options[selectedIndex];
    alert(selectedOption);
}

const appRoot = document.getElementById('app');

const render = () => {
    let template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol> 
                {displayOptions()}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();