import React from 'react'
import "./styles/Home.css"
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';

function Home() {

  
  return (
    <div className='body'>
      <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='sidebar-options'>
        <div className='sidebar-options-logo'>
        <img src='https://uc29036e0eb33c4dda7d9182a449.previews.dropboxusercontent.com/p/thumb/AB1qvOIAmPYD0oZxCEhrJT0oTHQkGmHhVW_JArkkLwd483vodZgDyvfn8N2sIGZ7OF2BGokomVhpcg5jr3T6gwAV1pppnsCMach-tM_s6G78fVRbQk-TkRfaNjH-jzOzqx_h-RpRgFs15K6o01M5V4o20zVW4iNp5RD3QzHAUDbzqgh7gPPQjFNKplvtlBi4WH7B2dBriRYJL0Fhu-NrKH3Nu75EBZl8c_hV1vYhXqx1f7dPML7oeEIOOEhwBS7aFUUXkkyaIQvMOMR0_SWbHmrLu0hy8I_j-lSLe8iaMUgBVXIy1aJaHINS9XP2G6_EzfUDVcWCb4yCe8cNpVFQGpgtb87Y-0dMHZNARVCqPQnedNf9nHAw-4r-4S39CirPcZO3MI2EOmutLgVDUojS3DiL64s4GCmmT7NRRjv019x3XA/p.png' alt='twitter logo' draggable="false"/>
        </div>

        <div className='sidebar-options-content'>
        <span><HomeIcon sx={{ color: 'white' }}/><Link>Home</Link></span>
        <span><TagIcon sx={{ color: 'white' }}/><Link>Explore</Link></span>
        <span><NotificationsNoneIcon sx={{ color: 'white' }}/><Link>Notifications</Link></span>
        <span><EmailOutlinedIcon sx={{color : "white"}}/><Link>Messages</Link></span>
        <span><TurnedInNotOutlinedIcon sx={{color : "white"}} /><Link>Bookmarks</Link></span>
        <span><PersonOutlineOutlinedIcon  sx={{color : "white"}} /><Link>Profile</Link></span>
        <span><MoreHorizIcon sx={{color : "white"}} /><Link>More</Link></span>
        <span><Link>tweet button</Link></span>
        </div>
        <div className='sidebar-options-tweet'>

        </div>
        </div>
        <div className='sidebar-profile'>

        </div>
      </div>
      </div>


      <div className='content'>

      </div>
      <div className='widget'>
        
      </div>
    </div>
  )
}

export default Home;