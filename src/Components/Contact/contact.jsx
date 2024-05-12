import React from 'react'
import "./contact.css"
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const contact = () => {
  return (
    <div className="contact-section">
      <h2>Contáctanos</h2>
      <p>
        ¿Tienes preguntas sobre Colombia o necesitas ayuda para planificar tu viaje? No dudes en contactarnos. Estamos aquí para ayudarte a que tu experiencia en Colombia sea inolvidable.
      </p>
      <div className="contact-info">
        <h3>Por correo electrónico:</h3>
        <ul>
          <li><a href="mailto:info@ecoturisapp.gov.co">info@ecoturisapp.gov.co</a></li>
          <li><a href="mailto:atencion@ecoturisapp.com.co">atencion@ecoturisapp.com.co</a></li>
        </ul>
        <h3>Por teléfono:</h3>
        <ul>
          <li>Línea gratuita nacional: 01 8000 958283</li>
          <li>Línea Bogotá: +57 601 6007777 (Ext: 1276, 1244, 1337, 2153, 1537)</li>
        </ul>
        <h3>Redes sociales:</h3>
        <div className='contactSociales-flex'>
          <a href="https://twitter.com/" className="logo flex">
                    <p><FaXTwitter
                    className="icon" /> Twitter</p>
                </a>
          <a href="https://www.youtube.com/" className="logo flex">
                    <p><FaYoutube
                    className="icon" /> YouTube</p>
                </a>
          <a href="https://www.facebook.com/" className="logo flex">
                    <p><FaFacebookSquare
                    className="icon" /> Facebook</p>
                </a>    
          <a href="https://www.instagram.com/" className="logo flex">
                    <p><AiFillInstagram
                    className="icon" /> Instagram</p>
                </a>
        </div>
        <ul>
          <li><a href="https://www.mincit.gov.co/">Ministerio de Comercio, Industria y Turismo</a></li>
        </ul>
      </div>
    </div>
  );
}


export default contact