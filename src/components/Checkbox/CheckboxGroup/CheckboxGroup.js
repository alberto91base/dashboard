import React, { useEffect, useRef } from 'react';

import { Checkbox } from '@components';

const CheckboxGroup = ({ className, register, name, label, values, error }) => {
    return (
        <div className={`${className}`}>
            <div className="checkboxGroup">
                <label className="checkboxGroup__principalLabel">
                    <span className="checkboxGroup__principalLabel__text">
                        {label}
                    </span>
                </label>
                <div className="checkboxGroup__items">
                    {values.map((item, index) => (
                        <Checkbox
                            key={`${name}${index}`}
                            item={item}
                            name={name}
                            register={register}
                        />
                    ))}
                </div>
                {error && (
                    <span className="inputRadio__error">{error.message}</span>
                )}
            </div>
        </div>
    );
};

export default CheckboxGroup;
