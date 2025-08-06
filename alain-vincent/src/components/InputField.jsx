import React, { useState } from 'react';

const InputField = ({ id, name, label, type = 'text', value, onChange, error }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const labelClasses = `
        absolute left-3 px-1 text-lg text-gray-400 z-10 transition-all duration-200
        ${isFocused || value
            ? 'top-0 text-md text-indigo-500 bg-base-100 transform -translate-y-1/2'
            : 'top-1/2 transform -translate-y-1/2'
        }
    `;

    const containerClasses = `
        relative border rounded-sm px-3
        ${isFocused ? 'border-indigo-500' : 'border-gray-500'}
    `;

    return (
        <div className="relative">
            <div className={containerClasses}>
                <label htmlFor={id} className={labelClasses} >{label}</label>
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    placeholder=" "
                    className="block p-3 w-full text-lg appearance-none focus:outline-none bg-transparent"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={onChange}
                />
            </div>
            {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default InputField;