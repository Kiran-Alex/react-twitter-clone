import './styles/App.css';
import { Route,Routes,Navigate, Link } from 'react-router-dom';
import Login from './Login';
import React from 'react';
import Signup from './Signup'
import Home from './Home';
import Tweetbox from './Tweetbox';
import Explore from './Explore';


function App() {
  return (
    <React.Fragment>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path='/' element={ <Navigate to="/login"  replace/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path='/home/tweet-compose' element={<Tweetbox/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
