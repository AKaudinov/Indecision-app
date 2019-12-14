import React from "react";

const Option = ({option, count, onRemoveOption}) => {
    return (
        <div className="option">
        <p className="option__text">{count}. {option}</p>
            <button
                className="button button--link"
                onClick={() => onRemoveOption(option)}>remove</button>

        </div>
    )
};

export default Option;

//or you can export via inline < you will see this as unknown in the react dev tools, so don't export stateless components inline
// export default ({options, onRemoveOption}) => {
//
// }
