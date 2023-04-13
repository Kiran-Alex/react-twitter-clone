import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Signup.css';
import { useNavigate } from 'react-router-dom';


function Signup() {
  const [Signuserdata, setSignuserdata] = useState([{ name: undefined, pass: undefined }]);
  const [Usern, setUsern] = useState();
  const [Passu, setPassu] = useState();
  const [UuniqueCheck, setUuniqueCheck] = useState();
  const [UpniqueCheck, setUpniqueCheck] = useState();
  const [Checkedup,setCheckedup]=useState(false)

  const username = (e) => {
    e.preventDefault();
    setUsern(e.target.value);
  };

  const password = (e) => {
    e.preventDefault();
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
    let localstorage = JSON.parse(localStorage.getItem('user'));
    let usercheck = localstorage.some((s) => s.name === Usern);
    console.log(usercheck)

    if (/^[a-zA-Z0-9]+$/.test(Usern) === false || usercheck === true) {
      setUuniqueCheck(false);
      setUpniqueCheck(true)
    } else if (/^(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/.test(Passu) === false) {
      setUpniqueCheck(false);
      setUuniqueCheck(true)
    } else {
      let userpass = { name: Usern, pass: Passu };
      setSignuserdata([...Signuserdata, userpass]);
      setUpniqueCheck(true)
      setUuniqueCheck(true)
      setCheckedup(true)
    }
  }



  useEffect(() => {
    if(Checkedup===true){
    localStorage.setItem('user', JSON.stringify(Signuserdata)); 
    navigate('/home')
  }
  }, [Signuserdata]);


  return (
    <div className='page-wrapper'>
      <div className='page-content'>
        <div className='container' >
          <img src='https://previews.dropbox.com/p/thumb/AB0P0bDdNAtIo0LI-xbgOVKbao-SJfG4jhH36IfTIBQ335YE4ZSlm1yrajuWhWabZNh8uShLfmCkDy6PDnsosCKpKaN9NmH9xkMj9dIY_3fyOBc57AizcB4SQ0-GPwNmahvpAnwNF-fzrAdL3qm7FDik0hDaggj0CSgikCGVYcbWpcrWIyIIrIOV3OWxTujGgaAKaypRwCXVnpHSRjQ1By9JEtOi8ICYH-Pxr4iXDQi4G6uhUPiwPtjmRh16g7s7p02XF9x9UC6ullTkGo5mEZjKony5O3WmnGiBXtBvNWDjUXQWKJf8ENwMG4ktQuyxfBvthZKb14uPYA-on91ccttFMsn2ANOWG8WUa-0xd1SZ_lDKwRsd5e7TD8vJFC9zymI/p.png' alt='twitter logo' draggable="false" />
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
      </div>
    </div>
  )
}

export default Signup;