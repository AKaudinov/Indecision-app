var nameVar = 'Hunter'; //you can re-define (var)/this variable, and not only re-assign them
var nameVar = 'Mike'; //will re-define the variable

let nameLet = 'Jen'; //you can re-assign the let variables
//let nameLet = 'Bob'; //you can't re-define a let variable

const nameConst = 'Tom'; //you can't re-assign or re-define const variables
// const nameConst = 'Jeff'; //this re-define won't work
// nameConst = 'Jerry'; //this re-assignment won't work


//var/let/const based variables are function scoped, they can't be accessed outside of that function
// function getPetName(){
//     var/let/const petName = 'Hal';
//    return petName;
// }
// console.log(petName); //this won't work, can't access the var variable that is scoped to the function

//Block scoping: let and const variables are also blocked scoped, where var isn't

var fullName = 'Hunter May';

if(fullName){
    var firstName = fullName.split(' ')[0]; //firstName and FullName vars are scoped the same, there is no function
    // here, just an if statement
    console.log(firstName);
}
console.log(firstName); //you can access the firstName var outside the if block statement above
//if you had a let or const in the if statement, this console.log(firstName)
// outside the if block statement wouldn't work, firstName would be undefined
