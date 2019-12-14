import Option from "./Option";
import React from "react";

const Options = ({options, handleDeleteOptions, onRemoveOption}) => (
    <div>
        <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>

            <button
                className="button button--link"
                type="button"
                onClick={handleDeleteOptions}>Remove all Options</button>
        </div>
        {options.length < 1 && <p className="widget__message">Please add an option to get started</p>}
        <div>{options.map((opt, index) =>
            <Option key={opt}
                    option={opt}
                    count={index + 1} //index starts at 0 not at 1, so increment by 1
                    onRemoveOption={onRemoveOption} />)}</div>
    </div>
);

export default Options;
