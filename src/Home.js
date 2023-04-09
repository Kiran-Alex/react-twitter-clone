import React from 'react'
import "./styles/Home.css"
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

function Home() {
  let navigate = useNavigate();
      function Handleclick(path) {
        navigate(path)
      }
  
  return (
    <div className='body'>
      <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='sidebar-options'>
        <div className='sidebar-options-logo'>
        <img src='https://previews.dropbox.com/p/thumb/AB0P0bDdNAtIo0LI-xbgOVKbao-SJfG4jhH36IfTIBQ335YE4ZSlm1yrajuWhWabZNh8uShLfmCkDy6PDnsosCKpKaN9NmH9xkMj9dIY_3fyOBc57AizcB4SQ0-GPwNmahvpAnwNF-fzrAdL3qm7FDik0hDaggj0CSgikCGVYcbWpcrWIyIIrIOV3OWxTujGgaAKaypRwCXVnpHSRjQ1By9JEtOi8ICYH-Pxr4iXDQi4G6uhUPiwPtjmRh16g7s7p02XF9x9UC6ullTkGo5mEZjKony5O3WmnGiBXtBvNWDjUXQWKJf8ENwMG4ktQuyxfBvthZKb14uPYA-on91ccttFMsn2ANOWG8WUa-0xd1SZ_lDKwRsd5e7TD8vJFC9zymI/p.png' alt='twitter logo' draggable="false"/>
        </div>

        <div className='sidebar-options-content'>
        <span className='sa' onClick={()=>{Handleclick("/signup")}}><HomeIcon sx={{ color: 'white' }}/><Link onClick={(e) => e.preventDefault()}>Home</Link></span>
        <span className='sa'><TagIcon sx={{ color: 'white' }}/><Link>Explore</Link></span>
        <span className='sa'><NotificationsNoneIcon sx={{ color: 'white' }}/><Link>Notifications</Link></span>
        <span className='sa'><EmailOutlinedIcon sx={{color : "white"}}/><Link>Messages</Link></span>
        <span className='sa'><TurnedInNotOutlinedIcon sx={{color : "white"}} /><Link>Bookmarks</Link></span>
        <span className='sa'><PersonOutlineOutlinedIcon  sx={{color : "white"}} /><Link>Profile</Link></span>
        <span className='sa'><MoreHorizIcon sx={{color : "white"}} /><Link>More</Link></span>
        </div>
        <div className='sidebar-options-tweet'>
        <div className='sat'><Link>Tweet</Link></div>
        </div>
        </div>
        <div className='sidebar-profile'>
          <div className='sidebar-profile-content'>
            <div className='sidebar-profile-content-image'>
            <AccountCircleSharpIcon id="profile-icon" sx={{color : "white"}} />
            </div>
            <div className='sidebar-profile-content-content'>
              <div className='sidebar-profile-content-content-text'>
                <span id='spbold'>GuestLogin <span>@guestlo66</span> </span>
              </div>
              <MoreHorizIcon sx={{color : "white"}}/>
            </div>
          </div>
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