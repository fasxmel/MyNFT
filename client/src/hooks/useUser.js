import { login, register } from "../api/userAPI";
import { UserContext } from "../context/userContext";
import { useContext } from "react";


export const useLogin = () => {
   const { changeUserState } = useContext(UserContext)
   const loginHandler = async (email, password) => {

     const { password: hashedPassword, ...loginData} = await login(email, password);

     changeUserState(loginData);
     return loginData;
   }

return loginHandler;
}


export const useRegister = () => {
    const { changeUserState } = useContext(UserContext);

    const registerHandler = async (email, password) => {
        const {password: hashedPassword, ...registerData}= await register(email, password);

    changeUserState(registerData);

    return registerData;
    }

    return registerHandler;
}
