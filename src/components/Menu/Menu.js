import React, { useState, useEffect } from 'react';
import { LoginComponent, ModalPortal, InfoUser } from '@components';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

//actions
import { logout } from '@redux/actions';

function Menu({ className, isLoggedIn, logout }) {
    const [modalShow, setModalShow] = useState(false);
    const handleModal = () => {
        setModalShow(!modalShow);
    };

    const handleLogout = () => {
        logout();
    };

    useEffect(() => {
        isLoggedIn && setModalShow(false);
    }, [isLoggedIn]);

    const htmlButtonLogin = isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
    ) : (
        <button onClick={handleModal}>Login</button>
    );
    return (
        <header className={className}>
            <div className="menuContent">
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li>{htmlButtonLogin}</li>
                </ul>

            </div>
            <InfoUser />
            {modalShow && (
                <ModalPortal onClose={handleModal}>
                    <LoginComponent />
                </ModalPortal>
            )}
        </header>
    );
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
});
const mapDispatchToProps = {
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
