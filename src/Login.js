import React, { useEffect, useState } from 'react'
import "./styles/Login.css"
import "./assets/logo.png"
import { Link ,useNavigate} from 'react-router-dom'

function Login() {
  const [Luser, setLuser] = useState("")
  const [Lpw, setLpw] = useState("")
  const [Lmatch, setLmatch] = useState(true)
  const [Log, setLog] = useState(false)


  function assignuser(e) {
    e.preventDefault()
    setLuser(e.target.value)
  }


  function assignpw(e) {
    e.preventDefault()
    setLpw(e.target.value)
  }

  const navigate=useNavigate();

  function toggleChange(e) {
    e.preventDefault()
    let storedata = JSON.parse(localStorage.getItem("user")) || [];
    let  usercheck = storedata.find((s) => s.name === Luser);
    if (usercheck && usercheck.pass === Lpw) {
      setLmatch(true);
      setLog(true)
    } else {
      setLmatch(false);
    }

  }

  useEffect(() => {
    if (Log===true) {
      localStorage.setItem("Loggedname", Luser);
      navigate('/home')
    }
  }, [Log]);
  


  return (
    <div className='page-wrapper'>
      <div className='page-content'>
        <div className='container' >
          <img src='https://previews.dropbox.com/p/thumb/AB0P0bDdNAtIo0LI-xbgOVKbao-SJfG4jhH36IfTIBQ335YE4ZSlm1yrajuWhWabZNh8uShLfmCkDy6PDnsosCKpKaN9NmH9xkMj9dIY_3fyOBc57AizcB4SQ0-GPwNmahvpAnwNF-fzrAdL3qm7FDik0hDaggj0CSgikCGVYcbWpcrWIyIIrIOV3OWxTujGgaAKaypRwCXVnpHSRjQ1By9JEtOi8ICYH-Pxr4iXDQi4G6uhUPiwPtjmRh16g7s7p02XF9x9UC6ullTkGo5mEZjKony5O3WmnGiBXtBvNWDjUXQWKJf8ENwMG4ktQuyxfBvthZKb14uPYA-on91ccttFMsn2ANOWG8WUa-0xd1SZ_lDKwRsd5e7TD8vJFC9zymI/p.png' alt='twitter logo' draggable="false" />
          <form onSubmit={toggleChange}>
            <h1>Sign in to Twitter</h1>
            <input type='text' className='textpass' onChange={assignuser} placeholder='username' />
            <input type='password' className='textpass' onChange={assignpw} placeholder='password' />
            {Lmatch === false && <p style={{ color: "red" }}>please check username or password again</p>}
            <button>Log in</button>
            <button id='gll' ><Link to="/home"> Guest Login</Link></button>
          </form>
          <span> No account ? <Link to="/signup">Sign up</Link></span>
        </div>
      </div>
    </div>

  )
}

export default Login;
