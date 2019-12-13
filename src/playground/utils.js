console.log('utils.js is running');

const square = (x) => x * x; //make sure to export the function, webpack doesn't pollute the global namespace,
//so all files maintain their own local scope

const add = (a, b) => a + b;

//OR Just use export inline insted of the export defined below
// export const square = (x) => x * x;
// export const add = (a, b) => a + b;


const subtract = (a, b) => a - b;
//OR:
//export default (a, b) => a - b;

export { //not an object, put references to things you want to export
    square,
    add,
    subtract as default
    //you can only have a single default export
}





//exports:
//default export: - each file can provide a default export
//named export: you can choose which things to export like so:

// export { //not an object, put references to things you want to export
//     square,
//     add
// }
