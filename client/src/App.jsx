import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Pricing from './components/pricing/Pricing';
import Catalog from './components/catalog/Catalog';
import Login from './components/login/Login';


function App() {
  
  return (
    <BrowserRouter>
    <div className="min-h-screen flex flex-col">
      <Header/> 
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
