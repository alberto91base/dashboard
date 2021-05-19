import React, { useState, useEffect } from 'react';

import { Table } from '@components';

import { connect } from 'react-redux';

//actions
import { searchLasClaves, deleteClave } from '@redux/actions';
//selectors
import { getClaves } from '@redux/modules/lasClaves/selectors';
//services
import NavigationService from '@services/navigation.service';

const columns = [
    { id: 'title', label: 'Title', minWidth: 170 },
    { id: 'absoluteUrl', label: 'absoluteUrl', minWidth: 100 },
    { id: 'actions', label: 'actions', minWidth: 50 },
];

const LasClaves = ({
    className,
    searchLasClaves,
    dataLasClaves,
    deleteClave,
    isLoggedIn,
}) => {
    useEffect(() => {
        isLoggedIn && loadData();
    }, [isLoggedIn]);

    const loadData = () => {
        searchLasClaves('asc', '');
    };

    const handleEdit = (id) => {
        NavigationService.navigate(`/las-claves/${id}`);
    };

    const handledelete = (id) => {
        deleteClave(id);
    };

    const handleAdd = () => {
        NavigationService.navigate('/las-claves/add');
    };

    return (
        <div className={className}>
            <h1>Las claves</h1>

            <div>
                <button onClick={handleAdd}>Añadir clave</button>
            </div>

            {dataLasClaves && (
                <Table
                    dataSource={dataLasClaves}
                    handleEdit={handleEdit}
                    handleDelete={handledelete}
                    columns={columns}
                />
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    dataLasClaves: getClaves(state),
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispachToProps = {
    searchLasClaves,
    deleteClave,
};

export default connect(mapStateToProps, mapDispachToProps)(LasClaves);
