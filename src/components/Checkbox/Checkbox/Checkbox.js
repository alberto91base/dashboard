import React, { useEffect, useRef } from 'react';

const Checkbox = ({ className, register, name, item }) => {
    const { label, value } = item;

    return (
        <div className={`${className}`}>
            <label className="checkbox__label">
                <input
                    className="checkbox__input"
                    type="checkbox"
                    {...register(name)}
                    value={value}
                />
                <span className="checkbox__label__text">{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;
