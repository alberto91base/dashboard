import React, { useState, useEffect } from 'react';

import { LoginComponent } from '@components';

const Login = ({ className }) => {
    return (
        <div className={`${className}`}>
            <LoginComponent />
        </div>
    );
};

export default Login;
