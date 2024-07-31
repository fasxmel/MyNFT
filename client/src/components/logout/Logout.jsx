import { Navigate } from "react-router-dom";


function Logout() {
localStorage.removeItem('accessToken');    
return <Navigate to="/" />   
}

export default Logout;