import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>
                REACT_APP_NOT_SECRET_CODE:{' '}
                {process.env.REACT_APP_NOT_SECRET_CODE}
            </p>
            <p>REACT_APP_API_URL: {process.env.REACT_APP_API_URL} </p>
            <p>REACT_APP_BASE_URL: {process.env.REACT_APP_BASE_URL} </p>

            <h2>Cámaras lenta</h2>
            <ul>
                <li>
                    <Link to="/camera-low" id="showCamerasLow">
                        ver cámaras lenta
                    </Link>
                </li>
                <li>
                    <Link to="/camera-low/add">crear cámara lenta</Link>
                </li>
            </ul>

            <h2>Las claves</h2>
            <ul>
                <li>
                    <Link to="/las-claves" id="showLasClaves">
                        ver las claves
                    </Link>
                </li>
                <li>
                    <Link to="/las-claves/add">crear clave</Link>
                </li>
            </ul>

        </div>
    );
};

export default Dashboard;
