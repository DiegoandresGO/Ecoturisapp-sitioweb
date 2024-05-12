import React from 'react'
import "./footer.css"
import { FiSend } from "react-icons/fi";
import { MdOutlineAirplanemodeActive } from 'react-icons/md';
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
   <section className='footer'>


    <div className="secContent-container">
      <div className="contactDiv-flex">
        <div className='text'>
          <small>Atrevete a conocer Colombia</small>
          <h1>Viaja con nosotros</h1>
        </div>

        <div className='inputDiv-flex'>
          <input type="text" placeholder='Enter Email Address' />
          <br />
          <button className='btn'>
            ENVIAR <FiSend className='icon'/>
          </button>
        </div>
        <div className='footerSocials-flex'>
          <a href="https://twitter.com/" className="logo flex">
                    <h6><FaXTwitter
                    className="icon" /> Twitter</h6>
                </a>
          <a href="https://www.youtube.com/" className="logo flex">
                    <h6><FaYoutube
                    className="icon" /> YouTube</h6>
                </a>
          <a href="https://www.facebook.com/" className="logo flex">
                    <h6><FaFacebookSquare
                    className="icon" /> Facebook</h6>
                </a>    
          <a href="https://www.instagram.com/" className="logo flex">
                    <h6><AiFillInstagram
                    className="icon" /> Instagram</h6>
                </a>
        </div>
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