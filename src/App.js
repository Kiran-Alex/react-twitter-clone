import './styles/App.css';
import { Route,Routes,Navigate, Link } from 'react-router-dom';
import Login from './Login';
import React from 'react';
import Signup from './Signup'

function App() {
  return (
    <React.Fragment>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path='/' element={ <Navigate to="/login"  replace/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
