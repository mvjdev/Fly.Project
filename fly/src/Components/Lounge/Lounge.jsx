import React, {useEffect} from 'react'
import video from '../../assets/lounge1.mp4'

//Import AOS==========

import Aos from 'aos'
import 'aos/dist/aos.css'

function Lounge() {
  return (
    <div className='lounge container section'>
        <div className="sectionContainer grid">

          <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
          <video src={video} autoPlay muted loop className='video'></video>
          </div>

        <div data-aos='fade-down' data-aos-duration='2500' className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>

        <div className="grids grid">

          <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='gridTitle'>
              Help through the airport
            </span>
            <p>
              You can also call airlines from your phone and book a flight 
              to one of your favorite destinations .
            </p>
          </div>

          <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='gridTitle'>
              Care on the fight
            </span>
            <p>
              You can also call airlines from your phone and book a flight 
              to one of your favorite destinations .
            </p>
          </div>

          <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='gridTitle'>
              Priority Boarding
            </span>
            <p>
              You can also call airlines from your phone and book a flight 
              to one of your favorite destinations .
            </p>
          </div>

          <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='gridTitle'>
              Chauffeur-drive-service
            </span>
            <p>
              You can also call airlines from your phone and book a flight 
              to one of your favorite destinations .
            </p>
          </div>

        </div>
        </div>
        </div>
    </div>
  )
}

export default Lounge