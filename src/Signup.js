import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import './styles/Signup.css';
import { twitterlogo } from './assets/Img';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Signup() {
  const [Signuserdata, setSignuserdata] = useState([{ name: undefined, pass: undefined }]);
  const [Usern, setUsern] = useState('');
  const [Passu, setPassu] = useState('');
  const [UuniqueCheck, setUuniqueCheck] = useState(true);
  const [UpniqueCheck, setUpniqueCheck] = useState(true);
  const [Checkedup, setCheckedup] = useState(false);

  const username = (e) => {
    setUsern(e.target.value);
  };

  const password = (e) => {
    setPassu(e.target.value);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('user'));
    if (storedData && Array.isArray(storedData)) {
      setSignuserdata(storedData);
    }
  }, []);
  
  const navigate = useNavigate();

  function toggleChange(e) {
    e.preventDefault()
    let localstorage = JSON.parse(localStorage.getItem('user')) || [];
    let usercheck = localstorage.some((s) => s.name === Usern);

    if (/^[a-zA-Z0-9]+$/.test(Usern) === false || usercheck === true) {
      setUuniqueCheck(false);
      setUpniqueCheck(true);
    } else if (/^(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/.test(Passu) === false) {
      setUpniqueCheck(false);
      setUuniqueCheck(true);
    } else {
      let userpass = { name: Usern, pass: Passu };
      setSignuserdata([...Signuserdata, userpass]);
      setUpniqueCheck(true);
      setUuniqueCheck(true);
      setCheckedup(true);
    }
  }

  useEffect(() => {
    if(Checkedup===true){
      localStorage.setItem('user', JSON.stringify(Signuserdata)); 
     
    }
  }, [Checkedup, Signuserdata, navigate]);


  return (
    <div className='page-wrapper'>
      
      <div className='page-content'>
        <div className='container' >
          <img src={twitterlogo} alt='twitter logo' draggable="false" />
          <form onSubmit={toggleChange}>
            <h1>Join Twitter today</h1>
            <input type='text' className='textpass' onChange={username} placeholder='username' />
            <input type='password' className='textpass' onChange={password} placeholder='password' />
            {UuniqueCheck === false ? (<p style={{ color: "red" }}> please make sure the username is alpha-numeric and unique</p>) : null}
            {UpniqueCheck === false ? (<p style={{ color: "red" }}  > Password should be 8 characters long and atleast one special character</p>) : null}
            <button>Sign up</button>
          </form>
          <span>Have an account already ? <Link to="/login">Log in</Link></span>
        </div>
        {Checkedup && <Alert severity="success">Successfully Registered Please <Link to={"/login"}>Log in</Link></Alert>}
      </div>
    </div>
  )
}

export default Signup;