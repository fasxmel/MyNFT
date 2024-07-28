import './App.css'
import { Routes, Route} from 'react-router-dom';
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
  const [user, setUser] = useState({});
  // control user state with context and setUser function
  // also we cant validate data here
  const changeUserState = (state) => {
    // TODO: validate user data
    setUser(state); 
  }

  const contextData = {
    userId: user._id,
    email: user.email,
    accsessToken: user.accessToken,
    isAuthticated: !!user.email,
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
