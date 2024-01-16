import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import DataProvider from './context/DataProvider';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';


// components
import Login from './components/account/Login';
import Home from './components/home/home';
import Header from './components/header/Header';


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? 
  <>
    <Header />
    <Outlet />
  </>
  : <Navigate replace to='/login' />
}


function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <Router>
        
        <div style={{ marginTop: 70 }}>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/' element={<Home />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );

}

export default App;
