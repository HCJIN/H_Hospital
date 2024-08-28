import React from 'react'
import '../css/mainPage.css';
import mainVideo from '../video/ush_video.mp4';

const MainPage = () => {
  return (
    <div className='mainPage-div'>
      <div className='main-video'>
        <video autoPlay loop muted playsInline>
          <source src={mainVideo} type='video/mp4'></source>
        </video>
      </div>
    </div>
  )
}

export default MainPage