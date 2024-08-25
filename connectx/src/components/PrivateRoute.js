import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Component }) => {
    const userId = useSelector(state => state.user?.userId);

    return userId ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
