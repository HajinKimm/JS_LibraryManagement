import React from 'react';
import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom";
import Home from './components/main/Home';
import Login from './components/login/Login';
import Logout from './components/login/Logout';
import AddBook from './components/addbook/AddBook';
import GlobalStyle from './styled/GlobalStyle ';
import Footer from './components/main/Footer';


const App = () => {
  return (
    <div style={{width:'100%'}}>
      <GlobalStyle/>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/addbook' element={<AddBook />} />
          <Route path='/editbook'>
            <Route path=':editID' element={<AddBook/>}/>
          </Route>
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
};

export default App;