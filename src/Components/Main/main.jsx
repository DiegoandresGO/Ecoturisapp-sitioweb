import React from 'react'
import "./main.css"
import video2 from '../../Assets/video2.mp4'


import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'
import img10 from '../../Assets/img (10).jpg'


import {HiOutlineLocationMarker} from 'react-icons/hi'
import {GiColombia} from 'react-icons/gi'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Cartagena',
    location: 'Colombia',
    description: 'Cartagena es una ciudad que está ubicada a orillas del Mar Caribe. Sus calles coloridas llenas de encanto la hacen la puerta de entrada a Suramérica. En Colombia, se encuentra al norte del país, y es la capital de la región de Bolívar.',
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'San Andres',
    location: 'Colombia',
    description: 'Cerca de cuarenta sitios para bucear, unas de las mejores playas del Caribe, un mar azul pero que también es verde y de tonos lila, y gente llena de amabilidad… esos son algunos de los encantos de las islas de San Andrés, Providencia y Santa Catalina, ubicadas en el Caribe colombiano.'
  },

 {
    id:3,
    imgSrc: img3,
    destTitle: 'Santa Marta',
    location: 'Colombia',
    description: 'Santa Marta es puro sabor. Es una ciudad donde la diversidad está totalmente presente en su paisaje, en su gente y en cada aspecto cultural que la compone; es un destino que acoge a todos sus visitantes y los hace sentir como en casa.'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Cali',
    location: 'Colombia',
    description: 'La capital del Valle del Cauca es una ciudad que tiene atractivos turísticos con historia, una vida cultural muy activa y unos ritmos musicales que le han dado fama en todo el mundo.'
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Barranquilla',
    location: 'Colombia',
    description: 'Barranquilla, también conocida como la Arenosa o Curramba la Bella, es una de las principales ciudades de Colombia y un destino turístico de referencia para locales y extranjeros.'
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Medellin',
    location: 'Colombia',
    description: 'Medellín es una ciudad cautivadora, no solo por su clima agradable (ronda los 19 °C durante todo el año); también por la amabilidad de su gente, su deliciosa comida y ese encanto paisa que enamora a los visitantes.'
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Bogotá',
    location: 'Colombia',
    description: 'Bogotá es la capital y la ciudad más grande de Colombia. Es punto de convergencia de personas de todo el país, así que es diversa y multicultural, y en ella se combinan lo antiguo y lo moderno.'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Bucaramanga',
    location: 'Colombia',
    description: 'Bucaramanga es una ciudad moderna, lo que no quita que también desborde de tradición y leyendas. Se la considera uno de los pueblos más encantadores de los Andes colombianos del este gracias al clima ideal que invita a cualquiera que decida visitarlo a disfrutar de sus muchos atractivos al aire libre.'
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Monteria',
    location: 'Colombia',
    description: 'La capital del departamento de Córdoba, cuya temperatura promedio es de 28ºC durante todo el año, recibe a los viajeros entre sabanas extensas donde florece la principal industria de la región, la ganadería. No muy lejos, a solo sesenta kilómetros, está el Mar Caribe.'
  },

  {
    id:10,
    imgSrc: img10,
    destTitle: 'Pereira',
    location: 'Colombia',
    description: 'Por su ubicación privilegiada en pleno corazón del eje cafetero colombiano, la ciudad de Pereira es el lugar perfecto para hacer base y llegar a las múltiples reservas naturales y los variados pueblos que forman parte de la imperdible región de los Andes occidentales.'
  },
]


const Main= () => {
  return (
    <section className='main container section'>
      <div className="videoDiv">
      <video src={video2} loop autoPlay muted type="video/mp4"></video>
    </div>

      <div className="secTitle">
        <h3 className="title">
          Destinos más visitados en Colombia
        </h3> <GiColombia className='icon' />
      </div>

      <div className="secContent grid">
      </div>

      {
        Data.map(({id, imgSrc, destTitle, location, description})=>{
          return(
            <div key={id} className="singleDestination">
              {/* */}
              <br />
              <div className="imageDiv">
                <img src={imgSrc} alt=
                {destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent-flex">
                <HiOutlineLocationMarker className='icon' />
                <span className="name">{location}</span>
                </span>
                <div className="desc">
                  <p>{description}</p>
                </div>
              </div>
              <hr />
            </div>
          )

        })
      }

    </section>
  )
}

export default Main