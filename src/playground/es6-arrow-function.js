const square = number => number * number;
const getFirstName = fullName => fullName ? fullName.split(' ')[0] : fullName;
//arrow functions don't have a reference to "this", therefore, if you need to use "this" keyword
//you have to use original/ES5 function declaration/expressions, //arrow functions are always anonymous
//you can't declare an arrow function, you can only use a function expression to create arrow functions

//arguments object - no longer bound with arrow functions as well
const add = (a, b) => {
  console.log(arguments); //this won't work - arguments is not defined
};

//this keyword

const user = {
    name: 'Hunter',
    cities: ['ShadowStorm', 'New Evans', 'Elwise'],
    printPlacesLived(){ //es6 object function definition, same as printPlacesLived: function(){}
        this.cities.forEach(city => console.log(city));
        //"this" is bound to the user object,
        //if printPlacesLived was an arrow function, we wouldn't be able to access "this.cities"
        //"this" would be undefined
                                    //"this" is not access-able inside a nested function
                                    //however, nested arrow functions can use the "this" keyword of their parents,
                                    //since arrow functions are anonymous
    }
};
