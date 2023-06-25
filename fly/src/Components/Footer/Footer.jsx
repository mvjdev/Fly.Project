import React, {useEffect} from 'react'

import Logo from '../../assets/logo.png'
import { TiSocialFacebook } from 'react-icons/ti'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'

//Import AOS==========

import Aos from 'aos'
import 'aos/dist/aos.css'

function Footer() {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div data-aos='fade-up' data-aos-duration='2500' className="gridOne">
          <div className="logoDiv">
            <img src={Logo} className='Logo'/>
          </div>
          <p>Your mind shold be stronger then your feelings , fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='iconn'/>
            <AiOutlineTwitter className='iconn'/>
            <AiFillYoutube className='iconn'/>
            <FaPinterestP className='iconn'/>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className='linkTitle'>Information</span>
          <li className="li">
            <a href="">Home</a>
          </li>
          <li className="li">
            <a href="">Explore</a>
          </li>
          <li className="li">
            <a href="">Flight Status</a>
          </li>
          <li className="li">
            <a href="">Travel</a>
          </li>
          <li className="li">
            <a href="">Check-In</a>
          </li>
          <li className="li">
            <a href="">Manage your booking</a>
          </li>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className='linkTitle'>Quick Guide</span>
          <li className="li">
            <a href="">FAQ</a>
          </li>
          <li className="li">
            <a href="">How to</a>
          </li>
          <li className="li">
            <a href="">Features</a>
          </li>
          <li className="li">
            <a href="">Baggage</a>
          </li>
          <li className="li">
            <a href="">Route Map</a>
          </li>
          <li className="li">
            <a href="">Our communities</a>
          </li>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className='linkTitle'>Information</span>
          <li className="li">
            <a href="">Chauffuer</a>
          </li>
          <li className="li">
            <a href="">Our parteners</a>
          </li>
          <li className="li">
            <a href="">Destination</a>
          </li>
          <li className="li">
            <a href="">Careers</a>
          </li>
          <li className="li">
            <a href="">Transportation</a>
          </li>
          <li className="li">
            <a href="">Programme Rules</a>
          </li>
        </div>

      </div>

      <div className="copyRightDiv flex">
        <p>Courtesy Design | Developed by <a href="" target='_blank'>Maria</a></p>
      </div>
    </div>
  )
}

export default Footer