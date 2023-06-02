import './styles/App.css';
import { Route,Routes,Navigate, Link } from 'react-router-dom';
import Login from './Login';
import React from 'react';
import Signup from './Signup'
import Home from './Home';
import Tweetbox from './Tweetbox';
import Explore from './Explore';
import Notification from './Notification';
import Bookmarks from './Bookmarks';
import Messages from './Messages';
import MessageCompose from './MessageCompose';


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
      <Route path='/notification' element={<Notification/>}/>
      <Route path='/Bookmarks' element={<Bookmarks/>}/>
      <Route path='/Messages' element={<Messages/>}/>
      <Route path='/Messages/Compose' element={<MessageCompose/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
