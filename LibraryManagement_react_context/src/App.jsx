import React from 'react';
import GlobalStyle from './styled/GlobalStyle ';
import { HashRouter , BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { UserProvier } from './contexts/UserContext';
// import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import AddBook from './pages/AddBook';
import BookList from './pages/BookList';
import { AuthorityProvider } from './contexts/AuthorityContext';
import Logout from './pages/Logout';

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }), 
  children
);

const App = () => {
  return (
    <>
      <GlobalStyle />

      <HashRouter>

        <AppProvider contexts={[UserProvier, AuthorityProvider]}  >
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/addbook' element={<AddBook/>}/>
            <Route path='/edit'>
              <Route path=':editID' element={<AddBook/>}/>
            </Route>
            <Route path='/bookList' element={<BookList/>}/>
          </Routes>
        </AppProvider>
      </HashRouter>
    </>
  );
};

export default App;