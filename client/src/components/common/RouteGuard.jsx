import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';



function RouteGuard() {
    const {isAuthticated} = useContext(UserContext);
    return isAuthticated 
    ? <Outlet />
    : <Navigate to="/login" />
}

export default RouteGuard;
   

