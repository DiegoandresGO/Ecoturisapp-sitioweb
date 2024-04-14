import React from 'react'
import "./footer.css"
import video2 from '../../Assets/video2.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineAirplanemodeActive } from 'react-icons/md';
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
   <section className='footer'>
    <div className="videoDiv">
      <video src={video2} loop autoPlay muted type="video/mp4"></video>
    </div>


    <div className="secContent-container">
      <div className="contactDiv-flex">
        <div className='text'>
          <small>Atrevete a conocer Colombia</small>
          <h2>Viaja con nosotros</h2>
        </div>

        <div className='inputDiv-flex'>
          <input type="text" placeholder='Enter Email Address' />
          <br />
          <br />
          <button className='btn'>
            ENVIAR <FiSend className='icon'/>
          </button>
        </div>
        <br />
        <div className='footerSocials-flex'>
          <a href="https://twitter.com/" className="logo flex">
                    <h6><FaXTwitter
                    className="icon" /> Twitter</h6>
                </a>
                <h1>|</h1>
          <a href="https://www.youtube.com/" className="logo flex">
                    <h6><FaYoutube
                    className="icon" /> YouTube</h6>
                </a>
                <h1>|</h1>
          <a href="https://www.facebook.com/" className="logo flex">
                    <h6><FaFacebookSquare
                    className="icon" /> Facebook</h6>
                </a>
                <h1>|</h1>    
          <a href="https://www.instagram.com/" className="logo flex">
                    <h6><AiFillInstagram
                    className="icon" /> Instagram</h6>
                </a>


        </div>
        <br />
        <div className="logoDiv">
        <h1><MdOutlineAirplanemodeActive className="icon" />
        EcoturisApp.</h1>
            </div>
            <div className='footerDiv-flex'>
              <small>© COPYRIGHTS RESERVADOS - DIEGO GARCIA-JEINER ACEVEDO 2024</small>

            </div>
      </div>
    </div>



   </section>
  )
}

export default Footer