import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import List from './pages/List';
import Listadded from './pages/Listadded';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContext from './context';
import list from './data'

function Main() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    console.log('123')
  })

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

