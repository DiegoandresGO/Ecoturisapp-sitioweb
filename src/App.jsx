import React from 'react';
import "./app.css";
import Footer from "./Components/Footer/footer";
import Home from "./Components/Home/home";
import Main from "./Components/Main/main";
import Destinations from './Components/Destinations/destinations';
import Accommodations from './Components/Accommodations/accommodations';
import Activities from './Components/Activities/Activities'
import Experiences from './Components/Experiences/experiences'
import Navbar from "./Components/Navbar/navbar";
import { Routes, Route } from "react-router-dom";
import { Contacto } from "./Components/Pages/Contacto";
import { Destinos } from "./Components/Pages/Destinos";
import { Inicio } from "./Components/Pages/Inicio";
import { Alojamientos } from './Components/Pages/Alojamientos';
import { Actividades } from './Components/Pages/Actividades';
import { Experiencias } from './Components/Pages/Experiencias';



function App()  {

    return ( 
         <div className='App'>
        <Navbar/>
        <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/destinos" element={<Destinos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/alojamientos" element={<Alojamientos />} />
            <Route path="/actividades" element={<Actividades />} />
            <Route path="/experiencias" element={<Experiencias />} />
        </Routes>
        <Footer />
        
    </div>
    );
}

export default App;