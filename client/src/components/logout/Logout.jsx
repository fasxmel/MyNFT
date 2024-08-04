import { Navigate } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';
function Logout() {
const { changeUserState } = useContext(UserContext);

useEffect(() => {
    localStorage.removeItem('accessToken');
    changeUserState({});
}, [changeUserState]);

return <Navigate to="/" />   
}

export default Logout;