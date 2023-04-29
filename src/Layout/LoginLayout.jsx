import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationVar from '../pages/shared/NavigationVar/NavigationVar';

const LoginLayout = () => {
    return (
        <div>
            <NavigationVar></NavigationVar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;