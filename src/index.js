import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  ,Route  , Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/home/Home';
import Reserva from './pages/Reserva'
import '@progress/kendo-theme-default/dist/all.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element ={<Home />}></Route>
      <Route path='/reserva' element ={<Reserva/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);