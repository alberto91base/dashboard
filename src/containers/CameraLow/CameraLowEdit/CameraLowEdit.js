import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CameraLowForm } from '@components';

import { connect } from 'react-redux';
//actions
import { loadEditCameraLow, editCameraLow } from '@redux/actions';
//selectors
import { getCameraLowNow } from '@redux/modules/cameraLow/selectors';

import { getValuesForDataDefault } from '@components/CameraLowForm/CameraLowTransformObject';

const CameraLowEdit = ({
    className,
    loadEditCameraLow,
    editCameraLow,
    dataCameraLow,
    isLoggedIn,
}) => {
    let { id } = useParams();

    const [dataTransform, setDataTransform] = useState(null);

    useEffect(() => {
        isLoggedIn && loadEditCameraLow(id);
    }, [isLoggedIn]);

    useEffect(() => {
        if (dataCameraLow)
            setDataTransform(getValuesForDataDefault(dataCameraLow));
    }, [dataCameraLow]);

    const handleSubmit = (data) => {
        editCameraLow(data);
    };

    console.log('data en edit', dataTransform);

    return (
        <div className={className}>
            <h1>Editar cámara lenta {id}</h1>
            {dataTransform && (
                <CameraLowForm
                    data={dataTransform}
                    handleSubmitPrimary={handleSubmit}
                />
            )}
            {!dataTransform && <p>Loading</p>}
        </div>
    );
};

const mapStateToProps = (state) => ({
    dataCameraLow: getCameraLowNow(state),
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispachToProps = {
    loadEditCameraLow,
    editCameraLow,
};

export default connect(mapStateToProps, mapDispachToProps)(CameraLowEdit);
