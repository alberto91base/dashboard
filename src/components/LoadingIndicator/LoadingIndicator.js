import React, { useState, useEffect } from 'react';

const LoadingIndicator = ({ className }) => {
    return (
        <div className={`${className}`}>
            loading...
        </div>
    );
};

export default LoadingIndicator;
