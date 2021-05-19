import React, { useEffect, useState } from 'react';

import { CameraLowForm } from '@components';

import { connect } from 'react-redux';
//actions
import { addCameraLow } from '@redux/actions';

import { getValuesForDataDefault } from '@components/CameraLowForm/CameraLowTransformObject';

const CameraLowAdd = ({ className, addCameraLow }) => {
    const [dataTransform, setDataTransform] = useState(null);

    useEffect(() => {
        setDataTransform(getValuesForDataDefault(null));
    }, []);

    const handleSubmit = (data) => {
        console.log('add camera low');
        addCameraLow(data);
    };

    return (
        <div className={className}>
            <h1>Añadir camara lenta</h1>
            {dataTransform && (
                <CameraLowForm
                    data={dataTransform}
                    handleSubmitPrimary={handleSubmit}
                />
            )}
        </div>
    );
};

const mapStateToProps = null;

const mapDispachToProps = {
    addCameraLow,
};

export default connect(mapStateToProps, mapDispachToProps)(CameraLowAdd);
