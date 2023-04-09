import React from 'react'
import { Link } from 'react-router-dom';
import "./styles/Signup.css"

 function Signup() {
  return (
    <div className='page-wrapper'>
      <div className='page-content'>
<div className='container' >
      <img src='https://previews.dropbox.com/p/thumb/AB0P0bDdNAtIo0LI-xbgOVKbao-SJfG4jhH36IfTIBQ335YE4ZSlm1yrajuWhWabZNh8uShLfmCkDy6PDnsosCKpKaN9NmH9xkMj9dIY_3fyOBc57AizcB4SQ0-GPwNmahvpAnwNF-fzrAdL3qm7FDik0hDaggj0CSgikCGVYcbWpcrWIyIIrIOV3OWxTujGgaAKaypRwCXVnpHSRjQ1By9JEtOi8ICYH-Pxr4iXDQi4G6uhUPiwPtjmRh16g7s7p02XF9x9UC6ullTkGo5mEZjKony5O3WmnGiBXtBvNWDjUXQWKJf8ENwMG4ktQuyxfBvthZKb14uPYA-on91ccttFMsn2ANOWG8WUa-0xd1SZ_lDKwRsd5e7TD8vJFC9zymI/p.png' alt='twitter logo' draggable="false"/>
      <form>
        <h1>Join Twitter today</h1>
        <input type='text' className='textpass' placeholder='username'/>
        <input type='password' className='textpass' placeholder='password'/>
        <button>Sign up</button>
      </form>
      <span>Have an account already ? <Link to="/login">Log in</Link></span>
    </div>
    </div>
    </div>
  )
}

export default Signup;