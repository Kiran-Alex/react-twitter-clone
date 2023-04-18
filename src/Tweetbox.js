import React, { useState } from 'react';
import Home from './Home';
import "./styles/tweetbox.css"
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import { Textarea } from '@chakra-ui/react';

function Tweetbox() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  }

  const handleButtonClick = () => {
    console.log(text);
    // Add your code to post the tweet here
    setText("");
  }

  return (
    <React.Fragment>
      <div className='roi'>
        <div className='tbbg'>

          <div className='tbcontainer'>
            <div className='tbc-header'>
              <div className='tbc-h-img'>
                <CloseIcon sx={{ color: "white" }} />
              </div>
              <div className='tbc-h-ut'>
                <span >Unsent Tweets</span>
              </div>
            </div>
            <div className='tbc-content'>
              <div className='tbc-c-img'>
                <div className='c-img'>
                  <AccountCircleSharpIcon id="profile-icon" sx={{ color: "white" }} />
                </div>
              </div>
              <div className='tbc-c-cont'>
                <div className='tbc-c-cont-c'>
                  <Textarea
                    placeholder="What's Happening"
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      fontSize: '20px',
                      fontFamily : "arial",
                      padding: '10px',
                      width: '500px',
                      height: '180px',
                      border: 'none', 
                      resize: 'none',
                      paddingTop : "15px",
                      outline: "none"
                    }}
                  />
                </div>
                <div className='tbc-c-cont-footer'></div>
              </div>
            </div>
          </div>

        </div>
        <Home />

      </div>
    </React.Fragment>
  )
}

export default Tweetbox;
