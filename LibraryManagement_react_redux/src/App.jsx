import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './assets/components/main/Home';
import Login from './assets/components/login/Login';
import Logout from './assets/components/login/Logout';
import AddBook from './assets/components/addbook/AddBook';
import GlobalStyle from './assets/styled/GlobalStyle ';

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/addbook' element={<AddBook />} />
          <Route path='/editbook'>
            <Route path=':editID' element={<AddBook/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;