import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    Dashboard,
    Error404,
    Login,
    CamerasLow,
    CameraLowAdd,
    CameraLowEdit,
    LasClaves,
    LasClavesAdd,
    LasClavesEdit,
} from '@containers';
// import PrivateRoute from './PrivateRoute';

const Routes = () => (
    <Switch>
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/'} component={Dashboard} />
        <Route exact path={'/camera-low'} component={CamerasLow} />
        <Route exact path={'/camera-low/add'} component={CameraLowAdd} />
        <Route exact path={'/camera-low/:id'} component={CameraLowEdit} />
        <Route exact path={'/las-claves'} component={LasClaves} />
        <Route exact path={'/las-claves/add'} component={LasClavesAdd} />
        <Route exact path={'/las-claves/:id'} component={LasClavesEdit} />
        <Route path="*" component={Error404} />
    </Switch>
);

export default Routes;
