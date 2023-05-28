import React, { useEffect, useState } from 'react'
import { twitterlogo } from './assets/Img';
import Select from "react-select";
import "./styles/Home.css"
import "./styles/Explore.css"
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
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"


function Explore () {

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

  const Widgetbox = () =>{
      return(
        <div className='wb-container'>
          <div className='wb-c-c'>
          <p>Trending in india</p>
          <p className='hashtag'>#Kiran</p>
          <p>20 tweets</p>
          </div>
          <div className='wb-c-options' id="more1">
            <MoreHorizOutlinedIcon sx={{color : "grey"}} id="more"/>
          </div>
        </div>
      )
  }
  
  const MySelect = () => {
  const [options, setOptions] = useState(initialOptions);

  function handleInputChange(inputValue) {
    if (!inputValue) {
      setOptions(initialOptions);
      return;
    }

    const filteredOptions = initialOptions.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );

    setOptions(filteredOptions);
  }

  return (
    <Select
      placeholder="Search an option"
      options={options}
      onInputChange={handleInputChange}
      isClearable
      isSearchable
      classNamePrefix="my-select" // add a custom class name prefix
    />
  );
};

const initialOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

  return (
    <div className='tweak'>
    <div className='body'>
      
      <div className='sidebar'>
        <div className='sidebar-content'>
          <div className='sidebar-options'>
            <div className='sidebar-options-logo'>
              <img src={twitterlogo} alt='twitter logo' draggable="false" />
            </div>

            <div className='sidebar-options-content'>
              <span className='sa' onClick={()=>{ Handleclick("/home")}}><HomeIcon sx={{ color: 'white' }} /><Link onClick={(e) => e.preventDefault()}>Home</Link></span>
              <span className='sa' onClick={()=>{ Handleclick("/explore")}}><TagIcon sx={{ color: 'white' }} /><Link>Explore</Link></span>
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
          <MySelect/>
          </div>
          <div className='content-home-text2'>
            <Link  class =  "ch211" >For you</Link>
            <Link class =  "ch211" >Trending</Link>
            <Link class =  "ch211" >News</Link>
            <Link class =  "ch211" >Sports</Link>
            <Link class =  "ch211" >Entertainment</Link>
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
          <MySelect/>
          </div>
          <div className='widget-wh'>
            <div className='widget-wh-header-footer'>
                <h2> What’s happening</h2>
            </div>
            <div className='widget-wh-content'>
              <Widgetbox/>
              <Widgetbox/>
              <Widgetbox/>
              <Widgetbox/>
              <Widgetbox/>
            </div>
            <div className='widget-wh-header-footer' id="w-footer">
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

export default Explore;