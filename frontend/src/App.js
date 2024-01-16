import logo from './logo.svg';
import './App.css';

import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// components
import Login from './components/account/Login';
import Home from './components/home/home';



function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{ marginTop: 70 }}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
