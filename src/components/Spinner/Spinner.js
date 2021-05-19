import React from 'react';

const Spinner = ({ className }) => {
    return (
        <div className={className}>
            <div className="spinner">
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
