import React from "react";

function mapOption(option) {
    if (typeof option === "object") {
        if (option.value === undefined) {
            throw new Error("Option objects must contain a value property.");
        }
        return option;
    }

    return { text: option, value: option };
}

export const Dropdown = ({ options, value, onChange, className }) => {
    const optionObjects = options.map(mapOption);
    return (
        <select value={value} onChange={onChange} className={className}>
            {optionObjects.map(opt =>
                <option key={opt.value} value={opt.value}>
                    {opt.text || opt.value}
                </option>
            )}
        </select>
    );
}
