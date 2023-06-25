import React, {useEffect} from 'react'

//Import AOS==========

import Aos from 'aos'
import 'aos/dist/aos.css'

function Subscribe() {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  return (
    <div className='subscribe section'>
      <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer container">
        <h2>Subscribe Newslettres & get Latest News</h2>
        <div className="inputDiv flex">
          <input className='input' type="text" placeholder='Enter your emal address'/>
          <button className='btn'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe