import { login, register } from "../api/userAPI";
import { UserContext } from "../context/userContext";
import { useContext } from "react";


export const useLogin = () => {
   const { changeUserState } = useContext(UserContext)
   const loginHandler = async (email, password) => {

     const result = await login(email, password);

     changeUserState(result);
     return result;
   }

return loginHandler;
}


export const useRegister = () => {
    const { changeUserState } = useContext(UserContext);

    const registerHandler = async (email, password) => {
        const {password: hashedPassword, ...userData}= await register(email, password);

    changeUserState(userData);

    return userData;
    }

    return registerHandler;
}
