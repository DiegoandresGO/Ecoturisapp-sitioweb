import React, {useState} from 'react';
import './navbar.css';
import {MdOutlineAirplanemodeActive} from 'react-icons/md';
import { Outlet, Link } from "react-router-dom"

const Navbar= () => {
    const [active] = useState('navBar')
    
  return (
    <section className='navBarSection'>
        <header className="header flex">
            <div className="logoDiv">
                <a href="/" className="logo flex">
                    <h1><MdOutlineAirplanemodeActive
                    className="icon" /> EcoturisApp.</h1>
                </a>
            </div>
            
        <div className={active}>
            <ul className="navLists flex"> 
            <li className='nav-item'>
                <Link to="/">Inicio</Link>
            </li>     
            <h1>|</h1>
            <li className='nav-item'>
            <Link to="/">Paquetes turisticos</Link> 
            </li>  
            <h1>|</h1>
            <li className='nav-item'>
            <Link to="Destinations">Destinos</Link>
            </li> 
            <h1>|</h1>
            <li className='nav-item'>
            <Link to="About">Acerca de</Link>
            </li>  
            <h1>|</h1>
            <li className='nav-item'>
            <Link to="New">Nuevo</Link>
            </li>
            <h1>|</h1> 
            <li className='nav-item'>
            <Link to="Contact">Contacto</Link>
            </li>   
            <button className='btn'>
                <a href="https://www.whatsapp.com/">Reserva ahora</a>
                </button>
                </ul>
                <hr />
                <Outlet />
            </div> 
           

        </header>
    </section>
  )
}

export default Navbar