import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../redux';

const ProtectedRoute = () => {
    const { user } = useSelector((state: RootState) => state.user);
    console.log("user", user);

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
