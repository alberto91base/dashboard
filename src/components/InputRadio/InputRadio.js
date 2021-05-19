import React, { useEffect } from 'react';

const InputRadio = ({
    className,
    register,
    name,
    label,
    values,
    error,
    data,
}) => {
    useEffect(() => {
        if (data) {
            data.forEach((element) => {
                const elementDom = document.querySelectorAll(
                    `[name="${name}"][value="${element}"]`
                );
                if (elementDom.length > 0) {
                    elementDom[0].click();
                }
            });
        }
    }, []);

    return (
        <div className={`${className}`}>
            <div className="inputRadio">
                <label className="inputRadio__principalLabel">
                    <span className="inputRadio__principalLabel__text">
                        {label}
                    </span>
                </label>
                <div className="inputRadio__items">
                    {values.map((item, index) => (
                        <label
                            key={`${name}${index}`}
                            className="inputRadio__label"
                        >
                            <input
                                className="inputRadio__input"
                                type="radio"
                                {...register(name)}
                                value={item.value}
                            />
                            <span className="inputRadio__label__text">
                                {item.label}
                            </span>
                        </label>
                    ))}
                </div>
                {error && (
                    <span className="inputRadio__error">{error.message}</span>
                )}
            </div>
        </div>
    );
};

export default InputRadio;
