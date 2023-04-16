import React, { useState } from 'react';
import Home from './Home';
import "./styles/tweetbox.css"

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
        
        </div>
        <Home />
       
      </div>
    </React.Fragment>
  )
}

export default Tweetbox;
