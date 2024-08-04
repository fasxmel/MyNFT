import { createContext, useState } from "react";


export const UserContext = createContext();


export const UserContextProvider = (props) => {
    const [user, setUser] = useState({});

    
  const changeUserState = (state) => {
    localStorage.setItem('accessToken', state.accessToken);
    setUser(state); 
  }

  const logout = () => {
    localStorage.removeItem('accessToken');
    setUser({});
  }


  const contextData = {
    userId: user._id,
    email: user.email,
    accsessToken: user.accessToken,
    isAuthticated: !!user.email,
    changeUserState,
    logout,
  }



    return (
        <UserContext.Provider value={contextData}>
            {props.children}
        </UserContext.Provider>
    );
}