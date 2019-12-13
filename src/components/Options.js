import Option from "./Option";
import React from "react";

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

export default Options;
