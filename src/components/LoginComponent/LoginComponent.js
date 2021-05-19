import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

//Actions
import { login, setTextErrorLogin } from '@redux/actions';

const LoginComponent = ({
    className,
    onLogin,
    errorTextLogin,
    setTextErrorLogin,
}) => {
    const [email, setEmail] = useState('admin@prueba.com');
    const [password, setPassword] = useState('3434dsf');

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin({ email, password });
    };

    useEffect(() => {
        if (errorTextLogin && errorTextLogin !== '') {
            setTextErrorLogin('');
        }
    }, [email, password]);

    return (
        <div className={`${className}`}>
            <h2>LoginComponent</h2>
            <form data-test-id='form-login' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="form-login-email"
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        id="password"
                        name="form-login-password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                {errorTextLogin && <p className="error-login">{errorTextLogin}</p>}
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    errorTextLogin: state.auth.errorTextLogin,
});
const mapDispachToProps = {
    onLogin: login,
    setTextErrorLogin: setTextErrorLogin,
};

export default connect(mapStateToProps, mapDispachToProps)(LoginComponent);
