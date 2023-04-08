import React from 'react'
import "./Login.css"
import "./assets/logo.png"
import { Link, useNavigate } from 'react-router-dom'
 function Login() {
  return (
    <div className='container' >
      <img src='https://uc29036e0eb33c4dda7d9182a449.previews.dropboxusercontent.com/p/thumb/AB1qvOIAmPYD0oZxCEhrJT0oTHQkGmHhVW_JArkkLwd483vodZgDyvfn8N2sIGZ7OF2BGokomVhpcg5jr3T6gwAV1pppnsCMach-tM_s6G78fVRbQk-TkRfaNjH-jzOzqx_h-RpRgFs15K6o01M5V4o20zVW4iNp5RD3QzHAUDbzqgh7gPPQjFNKplvtlBi4WH7B2dBriRYJL0Fhu-NrKH3Nu75EBZl8c_hV1vYhXqx1f7dPML7oeEIOOEhwBS7aFUUXkkyaIQvMOMR0_SWbHmrLu0hy8I_j-lSLe8iaMUgBVXIy1aJaHINS9XP2G6_EzfUDVcWCb4yCe8cNpVFQGpgtb87Y-0dMHZNARVCqPQnedNf9nHAw-4r-4S39CirPcZO3MI2EOmutLgVDUojS3DiL64s4GCmmT7NRRjv019x3XA/p.png' alt='twitter logo' draggable="false"/>
      <form>
        <h1>Sign in to Twitter</h1>
        <input type='text' className='textpass' placeholder='username'/>
        <input type='password' className='textpass' placeholder='password'/>
        <button>Log in</button>
      </form>
      <span> No account ? <Link to="/signup">Sign up</Link></span>
    </div>
  )
}

export default Login;