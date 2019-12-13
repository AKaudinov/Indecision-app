// // import './utils';
// import subtract, {square, add} from "./utils"; //you can import only the things you want via named exports
//
// //you don't import default exports in the curly braces
// // EX:
// // import subtract from './utils'
// //default export is not grabbed by name, you can name the default export when importing it whatever you want
// //instead of subtract above, you can name it dosh for example. Naming is not important as you're grabbing a default export
//
// console.log('app.js is running');
// console.log(square(2));
// console.log(add(square(2), 2));
// console.log(subtract(5, 3));

// import isSenior,{isAdult, canDrink} from "./person";
// console.log(isAdult(21));
// console.log(canDrink(20));
// console.log(isSenior(65));

import validator from 'validator'; //validator is a module, so no relative path is needed, webpack looks for a module on its own
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from "./components/IndecisionApp";
import 'normalize.css/normalize.css'; //grab the normalize css file,
// which resets the css so each browser has the same styles
//all browsers work off the same base
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.querySelector('#app'));
//app.js just bootstraps the app



// //ES6 transform class properties
// class OldSyntax{ //old class syntax
//     constructor(){
//         this.name = 'Mike';
//     }
//     getGreeting(){
//         return `Hi. my name is ${this.name}.`;
//     }
// }
// const oldSyntax = new OldSyntax();
// // const getGreeting = oldSyntax.getGreeting;
// // console.log(getGreeting()); //this would break as the 'this' binding would be broken
// console.log(oldSyntax);
//
// // ---
//
// //new ES6 class properties - you have to use babel and babel transform class properties for this to work
//
// class NewSyntax{
// //you can set up properties here via kew value pairs:
//     //these properties are not defined via variables
//     name = 'Jen';
//     getGreeting = () => `Hi, my name is ${this.name}`; //no need to bind the function to the class, arrow functions don't
//     //have their own this binding, they'd always be bound to the class
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newSyntax);
// console.log(newGetGreeting());
