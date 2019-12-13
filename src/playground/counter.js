const appRoot = document.querySelector('#app');

let count = 0;
function changeCount(add){
    add ? count++ : count--;
    renderCounterApp();
}

const resetCounter = () => {
    count = 0;
    renderCounterApp();
};

// const templateThree = (
//     <div>
//         <h1 id='counter'>Count: {count}</h1>
//         <button id='add_counter' onClick={() => changeCount(true)}>+1</button>
//         <button id='subtract_counter' onClick={() => changeCount(false)}>-1</button>
//         <button id='reset' onClick={resetCounter}>reset counter</button>
//     </div>
// );



// ReactDOM.render(templateThree, appRoot);

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1 id='counter'>Count: {count}</h1>
            <button id='add_counter' onClick={() => changeCount(true)}>+1</button>
            <button id='subtract_counter' onClick={() => changeCount(false)}>-1</button>
            <button id='reset' onClick={resetCounter}>reset counter</button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();
