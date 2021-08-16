//libraries
import React from 'react';
//Components


const Select = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange = {event => onChange(event.target.value)}
        >
            <option desabled="true" value="" >{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default Select;