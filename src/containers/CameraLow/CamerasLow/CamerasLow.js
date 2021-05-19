import React, { useState, useEffect } from 'react';

import { Table } from '@components';

import { connect } from 'react-redux';

//actions
import { searchCamerasLow, deleteCameraLow } from '@redux/actions';
//selectors
import { getCamerasLow } from '@redux/modules/cameraLow/selectors';
//services
import NavigationService from '@services/navigation.service';

const columns = [
    { id: 'title', label: 'Title', minWidth: 170 },
    { id: 'url', label: 'url', minWidth: 100 },
    { id: 'actions', label: 'actions', minWidth: 50 },
];

const CamerasLow = ({
    className,
    searchCamerasLow,
    dataCamerasLow,
    deleteCameraLow,
    isLoggedIn,
}) => {
    useEffect(() => {
        isLoggedIn && loadData();
    }, [isLoggedIn]);

    const loadData = () => {
        searchCamerasLow('asc');
    };

    const handleEditCameraLow = (id) => {
        NavigationService.navigate(`/camera-low/${id}`);
    };

    const handleDeleteCameraLow = (id) => {
        deleteCameraLow(id);
    };

    const handleAddCameraLow = () => {
        NavigationService.navigate('/camera-low/add');
    };

    return (
        <div className={className}>
            <h1>Cámara lenta</h1>

            <div>
                <button onClick={handleAddCameraLow}>
                    Añadir cámara lenta
                </button>
            </div>

            {dataCamerasLow && (
                <Table
                    dataSource={dataCamerasLow}
                    handleEdit={handleEditCameraLow}
                    handleDelete={handleDeleteCameraLow}
                    columns={columns}
                />
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    dataCamerasLow: getCamerasLow(state),
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispachToProps = {
    searchCamerasLow,
    deleteCameraLow,
};

export default connect(mapStateToProps, mapDispachToProps)(CamerasLow);
