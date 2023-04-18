import React, { useState } from 'react';
import Home from './Home';
import "./styles/tweetbox.css"
import CloseIcon from '@mui/icons-material/Close';

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
              <div className='tbc-c-img'></div>
              <div className='tbc-c-cont'>
              <div className="tbc-c-cont-img"></div>
              <div className='tbc-c-cont-c'></div>
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
