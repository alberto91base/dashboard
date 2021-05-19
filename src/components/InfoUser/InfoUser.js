import React, { useState, useEffect } from 'react';

//redux
import { connect } from 'react-redux';

const InfoUser = ({ className, user }) => {
    if (!user) return null;

    return (
        <div className={`${className}`}>
            <div className={'infoUser'}>
                <p>{user.email}</p>
                <p>Rol: {user.role}</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(InfoUser);
