import React, {useEffect} from 'react'
//Import video
import video from '../../assets/video.mp4'
import aeroplane from '../../assets/plane.png'

//Import AOS==========

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home=()=> {
    useEffect(()=>{
      Aos.init({duration:2000})
    }, [])

  return (
    <div className='home flex container'>
    <div>
      <h1 data-aos='fade-up' data-aos-duration='2500'>CREATE Ever-lasting Memories With Us</h1>
    </div>

    <div data-aos='fade-down' data-aos-duration='2500' className="homeImage flex">
      <div className="videoDiv">
        <video src={video} autoPlay muted loop className='video'></video>
      </div>

      <img src={aeroplane} className='plane'></img>
    </div>

    </div>
  )
}

export default Home