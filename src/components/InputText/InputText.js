import React from 'react';
import classNames from 'classnames';

const InputText = ({ className, register, name, label, error, hidden }) => {
    var inputTextClass = classNames({
        inputText: true,
        'inputText--hidden': hidden,
    });
    return (
        <div className={`${className}`}>
            <div className={inputTextClass}>
                <label className="inputText__label">
                    <span className="inputText__label__text">{label}</span>

                    <input
                        className="inputText__input"
                        type="text"
                        {...register(name)}
                    />
                </label>
                {error && (
                    <span className="inputText__error">{error.message}</span>
                )}
            </div>
        </div>
    );
};

export default InputText;
