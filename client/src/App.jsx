import './App.css'
import { Routes, Route} from 'react-router-dom';

import { UserContextProvider } from './context/userContext';

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
  
  return (
   <UserContextProvider>
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
   </UserContextProvider>
  )
}

export default App;
