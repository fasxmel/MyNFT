import { login, register } from "../api/userAPI";
import { UserContext } from "../context/userContext";
import { useContext } from "react";


export const useLogin = () => {
   const loginHandler = async (email, password) => {
   
     const result = await login(email, password);
    //  TODO:update state
     console.log(result);
   }

    return loginHandler;
}


export const useRegister = () => {
    const { changeUserState } = useContext(UserContext);
}
