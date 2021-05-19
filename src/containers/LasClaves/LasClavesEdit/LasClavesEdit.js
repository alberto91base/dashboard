import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { LasClavesForm } from '@components';

import { connect } from 'react-redux';
//actions
import { loadEditClave, editClave } from '@redux/actions';
//selectors
import { getClaveNow } from '@redux/modules/lasClaves/selectors';

import { getValuesForDataDefault } from '@components/LasClavesForm/LasClavesTransformObject';

const LasClavesEdit = ({
    className,
    loadEditClave,
    editClave,
    dataClaveNow,
    isLoggedIn,
}) => {
    let { id } = useParams();

    const [dataTransform, setDataTransform] = useState(null);

    useEffect(() => {
        isLoggedIn && loadEditClave(id);
    }, [isLoggedIn]);

    useEffect(() => {
        if (dataClaveNow)
            setDataTransform(getValuesForDataDefault(dataClaveNow));
    }, [dataClaveNow]);

    const handleSubmit = (data) => {
        editClave(data);
    };

    console.log('data en edit', dataTransform);

    return (
        <div className={className}>
            <h1>Editar cámara lenta {id}</h1>
            {dataTransform && (
                <LasClavesForm
                    data={dataTransform}
                    handleSubmitPrimary={handleSubmit}
                />
            )}
            {!dataTransform && <p>Loading</p>}
        </div>
    );
};

const mapStateToProps = (state) => ({
    dataClaveNow: getClaveNow(state),
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispachToProps = {
    loadEditClave,
    editClave,
};

export default connect(mapStateToProps, mapDispachToProps)(LasClavesEdit);
