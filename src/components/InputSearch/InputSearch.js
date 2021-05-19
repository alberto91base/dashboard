import React, { useState, useEffect } from 'react';

const InputSearch = ({ className, onChange }) => {
    const [searched, setSearched] = useState('');

    useEffect(() => {
        if (onChange) {
            onChange(searched);
        }
    }, [searched]);

    const cancel = () => {
        setSearched('');
    };

    return (
        <div className={className}>
            <input
                type="text"
                value={searched}
                onChange={(e) => setSearched(e.target.value)}
            />
            <button type="button" onClick={cancel}>
                X
            </button>
        </div>
    );
};

export default InputSearch;
