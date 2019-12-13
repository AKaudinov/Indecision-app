import React from "react";

const Option = ({option, onRemoveOption}) => {
    return (
        <p>{option}
            <button onClick={() => onRemoveOption(option)}>remove</button>
        </p>
    )
};

export default Option;

//or you can export via inline < you will see this as unknown in the react dev tools, so don't export stateless components inline
// export default ({options, onRemoveOption}) => {
//
// }
