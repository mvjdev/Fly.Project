import React, {useEffect} from 'react'

//Importation pays
import paris from '../../assets/Paris.jpg'
import dubai from '../../assets/Dubai.jpg'
import tokyo from '../../assets/Tokyo.jpg'
import newyork from '../../assets/NewYork.jpg'

//Personnes
import traveler1 from '../../assets/parisL.jpg'
import traveler2 from '../../assets/dubaiL.jpg'
import traveler3 from '../../assets/tokyoL.jpg'
import traveler4 from '../../assets/newyorkL.jpg'
//Fin de l'importation d'image

const travelers = [
  {
    id:1,
    destinationImage: paris,
    travelerImage:traveler1,
    travelerName:'IsraTech',
    socialLink:'@isratech8'
  },
  {
    id:2,
    destinationImage: dubai,
    travelerImage:traveler2,
    travelerName:'Wilson Lindsey',
    socialLink:'@Wilsonlindsey'
  },
  {
    id:3,
    destinationImage: tokyo,
    travelerImage:traveler3,
    travelerName:'Johnathan Smith',
    socialLink:'@Johnsmith'
  },
  {
    id:4,
    destinationImage: newyork,
    travelerImage:traveler4,
    travelerName:'Naresh Lamer',
    socialLink:'@NareshL'
  }

]

//Import AOS==========

import Aos from 'aos'
import 'aos/dist/aos.css'

function Travelers() {

    useEffect(()=>{
      Aos.init({duration:2000})
    }, [])
  
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Top travelers of this month!
          </h2>

        <div className="travelersContainer grid">

        {
            travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink})=>{
              return(
                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                {/**Simple passage card */}
            <img src={destinationImage} className='destinationImage'/>

            <div className="travelerDetails">
              <div className="travelerPicture">
              <img src={travelerImage} className='travelerImage'/>
              </div>
              <div className="travelerName">
                <span className='span'>{travelerName}</span>
                <p className='p'>{socialLink}</p>
              </div>
            </div>
          </div>
              );
            })
}

        </div>
      </div>

    </div>
  )
}

export default Travelers