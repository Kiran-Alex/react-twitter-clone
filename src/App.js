import logo from './logo.svg';
import './App.css';
import { Route,Routes,Navigate, Link } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <h1>hello kiran</h1>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path='/' element={ <Navigate to="/login"  replace/>}/>
      </Routes>
    </div>
  );
}

export default App;
