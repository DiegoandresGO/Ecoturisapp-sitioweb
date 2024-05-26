import React from 'react';
import './navbar.css';
import {MdOutlineAirplanemodeActive} from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';


const Navbar= () => {
    
  return (
    <nav>
        <Link to="/inicio" className='title'><h1><MdOutlineAirplanemodeActive />Ecoturisapp</h1></Link>
        <ul>
        <li>
            <NavLink to="/inicio">Inicio</NavLink> 
        </li>
        <li>
            <NavLink to="/vuelos">Vuelos</NavLink> 
        </li>
        <li>
            <NavLink to="/destinos">Destinos</NavLink>
        </li>
        <li>
            <NavLink to="/alojamientos">Alojamientos</NavLink>
        </li>
        <li>
            <NavLink to="/actividades">Actividades</NavLink>
        </li>
        <li>
            <NavLink to="/experiencias">Experiencias</NavLink>
        </li>
        <li>
            <NavLink to="/contacto">Contacto</NavLink>
        </li>

        </ul>
    </nav>
  )
}

export default Navbar