import React, { useEffect, useState } from 'react'
import "./styles/Home.css"
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import IosShareSharpIcon from '@mui/icons-material/IosShareSharp';

import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

function Home() {
  let navigate = useNavigate();
  const [Loguser,setLoguser] = useState("GuestLogin")
  function Handleclick(path) {
    navigate(path)
  }

  useEffect(()=>{
    const local = localStorage.getItem("Loggedname")
    if (Loguser === null || undefined || local == null || undefined) {
      setLoguser("GuestLogin")
    }
    else {
    setLoguser(local)
  }
  },[])


  const Feedbox = () => {
    return (<div className='fbx-content'>
      <div className='fbx-content-mimg'>
        <div className='mimg'>
          <AccountCircleSharpIcon sx={{ color: "white" }} />
        </div>
      </div>
      <div className='fbx-content-main'>
        <div className='fbx-content-minfo'>
          <div className='fbx-content-mi-username'>
            <b>KiranALex </b><span>@kiranalex</span><span> 2h</span>
          </div>
          <div className='fbx-content-mi-text'>
            <p>btrebebrbtrebebrbtrebebrbt</p>
          </div>

          <div className='fbx-content-features'>
            <div className='fbx-content-features-icons'>
              <div className='fcfi-crlas'>
                <ChatBubbleOutlineOutlinedIcon sx={{ color: "white" }} />
                <span>3</span>
              </div>
              <div className='fcfi-crlas'>
                <CachedOutlinedIcon sx={{ color: "white" }} />
                <span>3</span>
              </div>
              <div className='fcfi-crlas'>
                <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
                <span>3</span>
              </div>
              <div className='fcfi-crlas'>
                <BarChartSharpIcon sx={{ color: "white" }} />
                <span>3</span>
              </div>
              <div className='fcfi-crlas'>
                <IosShareSharpIcon id="shareicon" sx={{ color: "white" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }

  return (
    <div className='tweak'>
    <div className='body'>
      
      <div className='sidebar'>
        <div className='sidebar-content'>
          <div className='sidebar-options'>
            <div className='sidebar-options-logo'>
              <img src='https://previews.dropbox.com/p/thumb/AB6yqNlvM1vWZC548AI_qQFjL7-LH3cOiXhMNZeandvs2pEzRAQwPtSBa1vuvyhJAxGRfzXEZr4keEhEXUVssDsPqbk73tR1D2H3YJrlmAETSngY0kf4zk9dh_tmUD9kbwXd0CC4BTl4Ol-SYLQkl96VsQF340FIJ3s1omC0OOz-rtL1Mi28REYWVKhto97eWkUqDmASHWmTUkwYcAQPvV3YjLGIA1NzjUUFGxofshPmmrTplyu4myvDCUgpLA-VSRLvfwYmnlbp04z2v3m8PaFpTPMxC8UWUSyjMtBLcXXQ5-6R1ad9oQQaWVfYC41dW_mvHBxEI-fd0d3lYzzZ8rZD_hXaOryl3mRKcM1XNBzY8emjUsvukJ7vBPOw7DgRzlo/p.png' alt='twitter logo' draggable="false" />
            </div>

            <div className='sidebar-options-content'>
              <span className='sa'><HomeIcon sx={{ color: 'white' }} /><Link onClick={(e) => e.preventDefault()}>Home</Link></span>
              <span className='sa'><TagIcon sx={{ color: 'white' }} /><Link>Explore</Link></span>
              <span className='sa'><NotificationsNoneIcon sx={{ color: 'white' }} /><Link>Notifications</Link></span>
              <span className='sa'><EmailOutlinedIcon sx={{ color: "white" }} /><Link>Messages</Link></span>
              <span className='sa'><TurnedInNotOutlinedIcon sx={{ color: "white" }} /><Link>Bookmarks</Link></span>
              <span className='sa'><PersonOutlineOutlinedIcon sx={{ color: "white" }} /><Link>Profile</Link></span>
              <span className='sa'><MoreHorizIcon sx={{ color: "white" }} /><Link>More</Link></span>
            </div>
            <div className='sidebar-options-tweet'>
              <div className='sat'  onClick={()=>{ Handleclick("/home/tweet-compose")}} ><Link>Tweet</Link></div>
            </div>
          </div>
          <div className='sidebar-profile'>
            <div className='sidebar-profile-content'>
              <div className='sidebar-profile-content-image'>
                <AccountCircleSharpIcon id="profile-icon" sx={{ color: "white" }} />
              </div>
              <div className='sidebar-profile-content-content'>
                <div className='sidebar-profile-content-content-text'>
                  <span id='spbold'>{Loguser} <span>@{Loguser}</span> </span>
                </div>
                <MoreHorizIcon sx={{ color: "white" }} />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='content'>
        <div className='content-home'>
          <div className='content-home-text1'>
            <h3>Home</h3>
          </div>
          <div className='content-home-text2'>
            <Link className='ch21'>For you</Link>
            <Link className='ch21'>Following</Link>
          </div>
        </div>
        <div className='content-tweetbox'>
          <div className='ctbc'>
            <div className='ctbc-img'>
              <AccountCircleSharpIcon id="profile-icon" sx={{ color: "white" }} />
            </div>
            <div className="ctbc-txb">
              <input type='text' className="teext" placeholder="What's Happening ?" />
            </div>
            <div className="ctbc-twb">
              <span>Tweet</span>
            </div>
          </div>
        </div>
        <div className='content-field'>
          <Feedbox />
          <Feedbox />
          <Feedbox />
          <Feedbox />
          <Feedbox />
          <Feedbox />
          <Feedbox />
          <Feedbox />
          <Feedbox />
          <Feedbox />
          <Feedbox />
          <Feedbox />
          <Feedbox />
          <Feedbox />
          <Feedbox />
          <Feedbox />
          <Feedbox />
        </div>
      </div>
      <div className='widget'>
        <div className='widget-container'>
          <div className='widget-search'>
          <input type='text'  placeholder='search'/>
          </div>
          <div className='widget-wh'>
            <div className='widget-wh-header-footer'>
                <h2> What’s happening</h2>
            </div>
            <div className='widget-wh-content'>

            </div>
            <div className='widget-wh-header-footer'>
                <p>Show more</p>
            </div>
            
          </div>
          <div className='widget-follow'>

          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home;