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
          <img src='https://previews.dropbox.com/p/thumb/AB6yqNlvM1vWZC548AI_qQFjL7-LH3cOiXhMNZeandvs2pEzRAQwPtSBa1vuvyhJAxGRfzXEZr4keEhEXUVssDsPqbk73tR1D2H3YJrlmAETSngY0kf4zk9dh_tmUD9kbwXd0CC4BTl4Ol-SYLQkl96VsQF340FIJ3s1omC0OOz-rtL1Mi28REYWVKhto97eWkUqDmASHWmTUkwYcAQPvV3YjLGIA1NzjUUFGxofshPmmrTplyu4myvDCUgpLA-VSRLvfwYmnlbp04z2v3m8PaFpTPMxC8UWUSyjMtBLcXXQ5-6R1ad9oQQaWVfYC41dW_mvHBxEI-fd0d3lYzzZ8rZD_hXaOryl3mRKcM1XNBzY8emjUsvukJ7vBPOw7DgRzlo/p.png' alt='twitter logo' draggable="false" />
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
