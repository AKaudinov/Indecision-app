
class Person {
    constructor(name ='Anonymous', age = 0) { //put all the arguments into an array
        this.name = name;
        this.age = age;
    }

    getDescription(){
        console.log(`${this.name} is ${this.age}`)
    }

    getGreeting(){
        return `Hello, I'm ${this.name}.`;
    }
}




class Student extends Person {
    constructor(name, age, major){
        super(name, age); //call the parent constructor
        this.major = major;
    }

    getDescription(){ //overwrite the method on the parent
        // let description = super.getDescription(); //call the method on the parent class
        console.log(`${this.name} is ${this.age} with major in ${this.major}`)
    }

    hasMajor(){
        return !!this.major; //flip the falsy value of empty string or undefined, hence the double exclamation marks
    }
}


class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        return this.homeLocation
            ? `${greeting} I'm visiting from ${this.homeLocation}`
            : greeting
    }
}

//
// const me = new Student('Ellie', 24, 'Astronomy');
// const other = new Student('Hunter', 22, 'Art');
// other.getDescription();
// me.getDescription();

const me = new Traveler('Ellie', 24, 'Denver');
const other = new Traveler('Hunter', 23);

console.log(me.getGreeting());
console.log(other.getGreeting());
