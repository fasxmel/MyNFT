import './App.css'
import { Routes, Route} from 'react-router-dom';

import { UserContextProvider } from './context/userContext';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Catalog from './components/catalog/Catalog';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Create from './components/create/Create';
import Details from './components/details/Details';
import Logout from './components/logout/Logout';
import Edit from './components/edit/Edit';
import RouteGuard from './components/common/RouteGuard';
import NotFound from './components/404/NotFound';




function App() {
  
  return (
   <UserContextProvider>
    <div className="min-h-screen flex flex-col">
     
      <Header/> 

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/catalog' element={<Catalog />} />
        
        <Route element={<RouteGuard/>} >
          <Route path='/create' element={<Create />} />
          <Route path='/logout' element={<Logout/>} />
        </Route>

        <Route path='/edit/:nftId' element={<Edit />} />
        <Route path='/details/:nftId' element={<Details />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
     
    </div>
   </UserContextProvider>
  )
}

export default App;
