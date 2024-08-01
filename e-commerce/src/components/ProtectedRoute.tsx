import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../redux';

const ProtectedRoute = () => {
    const { user } = useSelector((state: RootState) => state.user);
    console.log("user", user);
    useSelector((state: RootState) => console.log('state',state.user.user))
    useSelector((state: RootState) => console.log('state2',state.user.email))

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
