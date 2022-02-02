import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MyShop from './MyShop';

function App() {

 useEffect(() => {
   require("../Scripts/Scripts")
 }, [])

  return (
    <BrowserRouter>
      <MyShop />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
