//avoid installing global modules:: package.json doesn't list all the dependencies that a person needs to run the app
//if you have multiple projects, that means all those projects need to use that same version of babel for example.
//if you're using global modules, you have to type out all the commands in the command line interface

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: []
        };

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.pickAnOption = this.pickAnOption.bind(this);
        this.addOption = this.addOption.bind(this);
        this.onRemoveOption = this.onRemoveOption.bind(this);
    }

    componentDidMount(){ //fires after component renders
        //JSON Stringify < converts a javascript object into a json string
        //JSON parse < converts json string into a javascript object
        try{
            const options = JSON.parse(localStorage.getItem('options'));

            if(options) { //only update state if options is not null
                this.setState(() => ({options: options}));
            }
        }catch(error){//catch an error if json data is invalid
            //don't do anything and don't update the state
            console.log(error);
        }
    }

    componentDidUpdate(prevProps, prevState){ //fires after prop or state values change
        if(prevState.options.length !== this.state.options.length){
            //only save if previous state data doesn't match the new current state data anymore
            const jsonData = JSON.stringify(this.state.options);
            localStorage.setItem('options', jsonData);
        }
    }

    componentWillUnmount(){ //fires before the component goes away/unmounts

    }

    handleDeleteOptions(){
        this.setState(() => ( {options: []} )) //wrap the object in parentheses if you want to return it inline
        //inside an arrow function without using 'return' keyword
    };

    pickAnOption(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    addOption(option){
        if(this.state.options.indexOf(option) !== -1){
            return 'This option already exists';
        }
            this.setState(prevState => {
                let newOpts = [...prevState.options];
                newOpts.push(option);
                return {
                    options: newOpts
                    //or: options: prevState.options.concat([option])
                }
            })
    }

    onRemoveOption(option){
        this.setState(prevState => ({
            options: prevState.options.filter((opt) => opt !== option)
        }));
    }

    render(){
        const title="Indecision App";
        const subtitle="Put your life in the hands of a computer";

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    pickAnOption={this.pickAnOption}/>
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    onRemoveOption={this.onRemoveOption}/>
                <AddOption
                addOption={this.addOption}/>
            </div>
        )
    }
}

// IndecisionApp.defaultProps = { //Default properties for the component, which can be overwritten, if the prop is passed in
//     options: []
// };


const Header = ({title, subtitle}) => (
    <div>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
    </div>
);

Header.defaultProps = {
  title:'indecision'
};


// class Header extends React.Component { //react component class must have a Capital first letter
//     constructor(props){
//         super(props); //super calls the constructor on the parent class/
//         this.title = props.title;
//         this.state = {
//             title: props.title,
//             subtitle: props.subtitle
//         }
//     }
//
//     render(){
//         return (
//             <div>
//                 <h1>{this.state.title}</h1>
//                 <h2>{this.state.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action = (props) => (
    <div>
        <button
            type="button"
            disabled={!props.hasOptions}
            onClick={props.pickAnOption}>What should I do?</button>
    </div>
);

// class Action extends React.Component{
//     constructor(props){
//         super(props);
//     }
//
//
//     // handlePick(){
//     //     console.log('picked');
//     // }
//
//     render(){
//         return (
//             <div>
//                 <button
//                     type="button"
//                     disabled={!this.props.hasOptions}
//                     onClick={this.props.pickAnOption}>What should I do?</button>
//             </div>
//         )
//     }
// }


const Option = ({option, onRemoveOption}) => {
    return(
            <p>{option} <button onClick={() => onRemoveOption(option)}>remove</button></p>
    )
};


const Options = ({options, handleDeleteOptions, onRemoveOption}) => (
    <div>
        <div>
            <button type="button" onClick={handleDeleteOptions}>Remove all Options</button>
        </div>
        {options.length < 1 ? <p>Please add an option to get started</p>:<p>Options here:</p>}
        <div>{options.map(opt =>
            <Option key={opt}
                    option={opt}
                    onRemoveOption={onRemoveOption} />)}</div>
    </div>
);


// class Options extends React.Component{
//     constructor(props) {
//         super(props);
//         // this.state  = {
//         //     options: props.options
//         // };
//
//         // this.onRemoveAll = this.onRemoveAll.bind(this);
//     }
//
//     // onRemoveAll(){
//     //
//     //     this.props.handleDeleteOptions();
//     //
//     //     // let newState = {
//     //     // this is obsolete, use the updated function because it doesn't suffer from asynchronous changes overtaking each other unlike this way of updating the state, if you need to update it multiple times.
//     //     //     options: []
//     //     // };
//     //     // this.setState(newState);
//     //     // this.setState(prevState => {
//     //     //     return {
//     //     //         options: []
//     //     //     }
//     //     // })
//     //     //if you have multiple updater functions firing, react knows this, and before re-rendering the component it figures out if it needs to constantly re-render after each setState
//     //     //or go through the updater functions and only update once at the end
//     //
//     //     //you can still pass in an object however, but updater function is preferred.
//     // }
//
//     render(){
//         return(
//             <div>
//                 <div>
//                     <button type="button" onClick={this.props.handleDeleteOptions}>Remove all Options</button>
//                 </div>
//                 <p>options here:</p>
//                 <div>{this.props.options.map(opt => <Option key={opt} option={opt} />)}</div>
//             </div>
//         )
//     }
//
// }


class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          error: undefined
        };
        this.onAddOption = this.onAddOption.bind(this); //bind the "this" inside the method to the component class,
        // otherwise the method doesn't have a reference to "this"
        //regular functions have no "this" binding
        //so methods have to be bound to the object they're part of, and reference its object's properties
    }

    onAddOption(e){
        e.preventDefault();
        const value = e.target.elements.option.value.trim();
        if(value) {
            // console.log(value);
            const error = this.props.addOption(value);
            if(error){
                this.setState(() => {
                    return{error: error}
                })
            }else{
                this.setState(() =>{
                    return {error: undefined }
                });
                e.target.elements.option.value = '';
            }
        }else{
            this.setState(() => {
                return{ error: 'Please add a valid item'}
            })
        }
    }

    render(){
        return(
            <form id="add_option_form" onSubmit={this.onAddOption}>
                <input name="option" type="text" autoComplete="off"/>
                <button type="submit">Add</button>
                {this.state.error && (<p>{this.state.error}</p>)}
            </form>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.querySelector('#app'));


// let user = {
//   name: 'Hunter',
//   age:24,
//   location: 'Reach facility'
// };
//
// function getLocation(location) {
//     if(location){
//         return (
//             <p>Location: {location}</p>
//         );
//     }
// }
//
// const templateTwo = (
//     <div className={'dosh-skau'}>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {/*logication and operator above, if the user is 18 or over, the statement after && runs*/}
//         {getLocation(user.location)}
//     </div>
// );
//
// const app ={
//     title: 'Indecision App',
//     subtitle: 'this is a subtitle',
//     options: ['One', 'Two', 'Three', 'Four'],
//     pickedOption: ''
// };
//
//
// function onFormSubmit(e){
//     e.preventDefault();
//
//     const option = e.target.elements.option.value;
//
//     if(option){
//         app.options.push(option);
//         e.target.elements.option.value = '';
//         renderTemplate();
//     }
// }
//
// function removeAllOptions(e){
//     app.options = [];
//     app.pickedOption = '';
//     renderTemplate();
// }
//
// function onMakeDecision(){
//     if(app.options.length) {
//         let randomNum = Math.floor(Math.random() * app.options.length); //make sure the length of array is taken into account when random number is generated
//         //round down the number as well
//         const option = app.options[randomNum];
//         app.pickedOption = option;
//         renderTemplate();
//     }
// }
//
// const appRoot = document.querySelector('#app');
//
// function renderTemplate(){
//     let options = app.options.map(option => (<li key={option}>{option}</li>));
//
//     const template =(
//         <div>
//             <h1>
//                 {app.title}
//             </h1>
//             {app.subtitle && <p>{app.subtitle}</p>}
//             <p>{(app.options && app.options.length) ? 'Here are your options:' : 'No Options'}</p>
//             {(app.options && app.options.length > 0) && <ol>{options}</ol>}
//
//             <button type='button' onClick={onMakeDecision} disabled={!app.options.length}>What should I do?</button>
//             <button type='button' onClick={removeAllOptions}>Remove All</button>
//
//             <form onSubmit={onFormSubmit}>
//                 <input type='text' name='option' autoComplete='off'/>
//                 <button>Add Option</button>
//             </form>
//             {app.pickedOption && <p>{app.pickedOption}</p>}
//         </div>
//     );
//
//     ReactDOM.render(template, appRoot);
// }
//
// renderTemplate();
//
// // ReactDOM.render(template, appRoot);
//
//



