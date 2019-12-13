export const isAdult = (age) => age >= 18;
export const canDrink = (age) => age >= 21;

export default (age) => age >= 65;

// const isSenior = (age) => age >= 65;

//OR instead of inline exports:
// export {
//     isAdult,
//     canDrink,
//     isSenior as default
// }
