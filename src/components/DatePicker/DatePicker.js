import React, { useEffect } from 'react';

const DatePicker = ({
    className,
    register,
    name,
    label,
    error,
    dateSelected,
    setValue,
}) => {
    useEffect(() => {
        if (dateSelected) {
            let dateFormated = new Date(dateSelected),
                day = dateFormated.getDate(),
                month = dateFormated.getMonth() + 1,
                year = dateFormated.getFullYear(),
                data;

            if (day < 10) {
                day = '0' + day;
            }
            if (month < 10) {
                month = '0' + month;
            }

            data = year + '-' + month + '-' + day;

            setValue(name, data);
        }
    }, []);

    return (
        <div className={`${className}`}>
            <div className="datePicker">
                <label className="inputRadio__label">
                    <span className="inputRadio__label__text">{label}</span>
                    <input
                        className="inputDate__input"
                        type="date"
                        {...register(name)}
                    />
                </label>
                {error && (
                    <span className="datePicker__error">{error.message}</span>
                )}
            </div>
        </div>
    );
};

export default DatePicker;
