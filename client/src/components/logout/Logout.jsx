import { Navigate } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';
function Logout() {
const { logout } = useContext(UserContext);

useEffect(() => { 
    logout();
}, []);

return <Navigate to="/" />   
}

export default Logout;