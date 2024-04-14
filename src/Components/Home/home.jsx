import React from 'react'
import "./home.css"
import video from '../../Assets/video.mp4';
import { CiLocationOn } from "react-icons/ci";
import { HiFilter } from "react-icons/hi";



const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className='homeContent-container'>
        <div className='textDiv'>

          <span className='smallText'>
            Nuestros paquetes
          </span>

          <h1 className='homeTitle'>
            Busca tus vacaciones
          </h1>
          
        </div>

        <div className="cardDiv">
          <div className="destinationInput">
            <label htmlFor="city">Buscar destino:</label>
            <div className="input-flex">
              <input type="text" placeholder='Introduzca nombre aqui....' />
              <CiLocationOn className="icon"/>
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Seleccionar dia:</label>
            <div className="input-flex">
              <input type="date"/>
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total-flex">
              <label htmlFor="price">Maximo precio</label>
              <h3 className="total">$10,000,000</h3>
            </div>
            <div className="input-flex">
              <input type="range" max="10,000,000"
              min="0" />
            </div>
          </div>
          </div>

          <div className="searchOptions-flex">
          <HiFilter className="icon"/>
          <span>MÁS FILTROS</span>
          </div>
      </div>

    </section>
  )
}

export default Home