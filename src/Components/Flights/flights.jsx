import React from 'react'
import "./flights.css"
import img52 from '../../Assets/img (52).jpg'
import img53 from '../../Assets/img (53).jpg'
import img54 from '../../Assets/img (54).jpg'
import img55 from '../../Assets/img (55).jpg'
import img56 from '../../Assets/img (56).jpg'
import img57 from '../../Assets/img (57).jpg'
import img58 from '../../Assets/img (58).jpg'
import img59 from '../../Assets/img (59).jpg'
import img60 from '../../Assets/img (60).jpg'

const flights = () => {
  return (
    <section>
        <h2 className='secTitle'>Atrevete a volar por Colombia</h2>
        <div className="image-container">
        <img src={img52} alt="Image1" className="imageflights"></img>
    </div>
    <div className='text-flights'> 
        <h5>Ecoturisapp se ha consolidado como una de las mejores agencias de turismo. Lo que nos permite contar con multiple convenios en aerolineas.</h5>
    </div>
    <div className="image-container">
    <div className="image-text-pair">
        <img src={img53} alt="Image1" className="image-containerflights" />
        <h3 className='image-title'>Avianca</h3>
        <p className="image-text-flights">Avianca es una aerolínea nacional con una amplia oferta de vuelos nacionales. ¡Reserva tus vuelos de Avianca Colombia con Ecoturisapp!<a href="https://www.avianca.com/es/">Vuela con Avianca...</a> </p>
      </div>
      <div className="image-text-pair">
        <img src={img54} alt="Image1" className="image-containerflights" />
        <h3 className='image-title'>Latam</h3>
        <p className="image-text-flights">Latam Airlines tiene excelentes ofertas para tus vuelos. ¡Reserva tus vuelos de Latam Colombia con Ecoturisapp y disfruta tus viajes de la mejor manera!<a href="https://www.latamairlines.com/co/es">Vuela con Latam...</a> </p>
      </div>
      <div className="image-text-pair">
        <img src={img55} alt="Image1" className="image-containerflights" />
        <h3 className='image-title'>Wingo</h3>
        <p className="image-text-flights">Encuentra vuelos baratos de Wingo en Ecoturisapp. Contamos con una gran variedad de ofertas de vuelos de Wingo para un viaje. ¡Reserva ahora!<a href="https://www.wingo.com/">Vuela con Wingo...</a> </p>
      </div>
      <div className="image-text-pair">
        <img src={img56} alt="Image1" className="image-containerflights" />
        <h3 className='image-title'>JetSmart</h3>
        <p className="image-text-flights">JetSmart y Ecoturisapp te ayudan a encontrar los vuelos baratos para tus vacaciones. Viajar es más barato y más fácil con vuelos de JetSmart.<a href="https://jetsmart.com/co/es/">Vuela con JetSmart...</a> </p>
      </div>
      </div>

      <div className="image-container">
    <div className="image-text-pair">
        <img src={img57} alt="Image1" className="image-containerflights" />
        <h3 className='image-title'>Copa Airlines</h3>
        <p className="image-text-flights">Copa Airlines Colombia es una de las aerolíneas colombianas más importantes del país. ¡Reserva con Ecoturisapp los tiquetes de Copaair que buscas ahora!<a href="https://www.copaair.com/es-gs/">Vuela con Copa Airlines...</a> </p>
      </div>
      <div className="image-text-pair">
        <img src={img58} alt="Image1" className="image-containerflights" />
        <h3 className='image-title'>Click Air</h3>
        <p className="image-text-flights">Vuelos nacionales en Colombia con CLIC. Tiquetes baratos a Bogotá, Medellín, Yopal, Neiva, Apartadó, Pereira y más de 25 rutas disponibles. Reserva con Ecoturisapp<a href="https://clicair.co/">Vuela con Click Air...</a> </p>
      </div>
      <div className="image-text-pair">
        <img src={img59} alt="Image1" className="image-containerflights" />
        <h3 className='image-title'>Satena</h3>
        <p className="image-text-flights">Satena es una de las aerolíneas colombianas más importantes del país para comprar tus tiquetes. ¡Reserva ya tus vuelos de Satena junto a Ecoturisapp!<a href="https://www.satena.com/">Vuela con Satena...</a> </p>
      </div>
      <div className="image-text-pair">
        <img src={img60} alt="Image1" className="image-containerflights" />
        <h3 className='image-title'>Viva Air</h3>
        <p className="image-text-flights">Viva Air es una de las mejores opciones para tus viajes, con buenas ofertas de bajos costos. Reserva ya tus vuelos de Viva Air de Colombia con Ecoturisapp.<a href="https://www.aviatur.com/vuelos/tiquetes-baratos-con-vivaair">Vuela con Viva Air...</a> </p>
      </div>
      </div>
      
    </section>
    )
}

export default flights