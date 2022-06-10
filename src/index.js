import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import List from './pages/List';
import Listadded from './pages/Listadded';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContext from './context';

function Main() {
  const [cart, setCart] = useState([])

  return (
    <React.StrictMode>
      <CartContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/list" element={<List  />} />
          <Route path="/listadded" element={<Listadded />} />
          <Route path="*" element={<App/>} />
        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
  </React.StrictMode>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main/>
);

