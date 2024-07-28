import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { UserContext } from './context/userContext';
import * as userApi from './api/userAPI'


import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Pricing from './components/pricing/Pricing';
import Catalog from './components/catalog/Catalog';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Create from './components/create/Create';
import Profile from './components/profile/Profile';
import Logout from './components/Logout';
import Details from './components/details/Details';


function App() {
  // TODO: remove from app component
  const navigate = useNavigate();
  const [user, setUser] = useState({});


  const onLoginSubmit = async (data) => {
    try {
      const result = await userApi.login(data);
      // is it needed? or can we do it distructured the user object?
      changeUserState(result);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  
  }
  
  // control user state with context and setUser function
  // also we cant validate data here
  const changeUserState = (state) => {
    setUser(state); 
  }


  const contextData = {
    userId: user._id,
    email: user.email,
    accsessToken: user.accessToken,
    isAuthticated: !!user.email,
    onLoginSubmit,
    changeUserState
  }


  

  return (
    <UserContext.Provider value={{...contextData}}>
    <div className="min-h-screen flex flex-col">
     
      <Header/> 
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/create' element={<Create />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/details/:nftId' element={<Details />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
     
    </div>
    </UserContext.Provider>
  )
}

export default App;
