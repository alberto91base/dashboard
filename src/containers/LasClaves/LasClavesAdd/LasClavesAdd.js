import React, { useEffect, useState } from 'react';

import { LasClavesForm } from '@components';

import { connect } from 'react-redux';
//actions
import { addClave } from '@redux/actions';

import { getValuesForDataDefault } from '@components/LasClavesForm/LasClavesTransformObject';

const LasClavesAdd = ({ className, addClave }) => {
    const [dataTransform, setDataTransform] = useState(null);

    useEffect(() => {
        setDataTransform(getValuesForDataDefault(null));
    }, []);

    const handleSubmit = (data) => {
        console.log('add clave');
        addClave(data);
    };

    return (
        <div className={className}>
            <h1>Añadir clave</h1>
            {dataTransform && (
                <LasClavesForm
                    data={dataTransform}
                    handleSubmitPrimary={handleSubmit}
                />
            )}
        </div>
    );
};

const mapStateToProps = null;

const mapDispachToProps = {
    addClave,
};

export default connect(mapStateToProps, mapDispachToProps)(LasClavesAdd);
