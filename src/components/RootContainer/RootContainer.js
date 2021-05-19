import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getShowLoading } from '@redux/modules/app/selectors';

import { localStoragelogin } from '@redux/actions';

import { LoadingIndicator, AlertIndicator } from '@components';

const RootContainer = ({ showLoading, localStoragelogin }) => {
    useEffect(() => {
        localStoragelogin();
    }, []);
    return (
        <>
            {showLoading && <LoadingIndicator />}
            <AlertIndicator />
            <h1>RootContainer</h1>
        </>
    );
};

const mapStateToProps = (state) => ({
    showLoading: getShowLoading(state),
});

const mapDispatchToProps = {
    localStoragelogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
