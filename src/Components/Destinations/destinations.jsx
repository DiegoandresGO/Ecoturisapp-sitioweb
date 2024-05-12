import React from 'react'
import "./destinations.css"
import img11 from '../../Assets/img (11).jpg'
import img12 from '../../Assets/img (12).jpg'
import img13 from '../../Assets/img (13).jpg'
import img14 from '../../Assets/img (14).jpg'
import img15 from '../../Assets/img (15).jpg'
import img16 from '../../Assets/img (16).jpg'
import { SiWhatsapp } from "react-icons/si";

const Data = [
  {
    id:1,
    imgSrc: img12,
    destTitle: 'Caño Cristales',
    location: 'El río más hermoso del mundo',
    description: 'Si quieres conocer el río más hermoso del mundo necesitas venir a Caño Cristales. Es un lugar espléndido de aguas transparentes en el que podrás apreciar prácticamente un arcoíris dentro del agua. Esto se debe a que en su fondo se reproducen unas algas acuáticas de diferentes colores entre los que están el verde, amarillo, rojo, rosado, azul y negro. En este río también podrás apreciar increíbles formaciones rocosas en su lecho.Otro lugar que no puedes perderte es el sector “Los Ochos”, unas pequeñas cascadas de agua cristalina que caen a unos pozos naturales en el lecho rocoso del río. Sin duda todo un espectáculo. Además, en este paradisiaco lugar también podrás vivir el famoso “atardecer llanero”, gracias a la majestuosa vista que ofrece la extensa sabana del lugar. Lo que significa que no solo te maravillarás con los colores en el agua, sino también en el cielo. Para visitar Caño Cristales tendrás que llegar primero a La Macarena, en el Departamento del Meta. Si viajas desde Bogotá, el vuelo hasta este lugar te tomará apenas una hora.'
  },
  {
    id:2,
    imgSrc: img13,
    destTitle: 'Desierto de la Tatacoa',
    location: 'El asombroso desierto',
    description: 'Colombia es una maravillosa tierra de contrastes, por ello al recorrerla podrás pasar de la majestuosidad del llano a la del desierto. La Tatacoa es un escenario natural increíble que te cautivará no solo por sus hermosas tierras de color ocre y gris, sino también porque allí podrás vivir las noches más espléndidas de tu vida. Y es que, aunque pisar su tierra es ya una vivencia inolvidable, lo será aún más cuando vivas la experiencia de observar las constelaciones. En este lugar estarás en un desierto rodeado de nada, muy lejos del caos de la vida moderna. Allí, en la oscuridad de la noche y sin nada que obstruya tu vista, podrás deslumbrarte durmiendo bajo un manto de miles de estrellas, algo que sin duda marcará su vida. El desierto de la Tatacoa está a 280 km de la ciudad de Bogotá. Este lugar está ubicado al norte del departamento del Huila, a unos 40 km de su capital, Neiva. De hecho, si vas en avión, es precisamente a esta ciudad a donde debes llegar. Un vuelo desde Bogotá hasta Neiva tomará poco menos de una hora.'
  },
  {
    id:3,
    imgSrc: img14,
    destTitle: 'Parque Nacional Natural Tayrona',
    location: 'La cautivadora belleza natural',
    description: 'En esta tierra, las bellezas naturales son infinitas. Y el Parque Nacional Natural Tayrona es el mejor ejemplo de los imponentes escenarios que puedes encontrar en Colombia. Este lugar, reserva de la biósfera de la UNESCO, cuenta con la montaña costera más alta del mundo, la Sierra Nevada de Santa Marta, así como con diversos ecosistemas llenos de contrastes: magníficas playas de arena blanca, selva, mares cristalinos y corales, manglar, montañas nevadas y bosques secos, húmedos y nublados, entre otros. Este parque es un santuario natural que invita a todo aquel que lo visita a encontrarse consigo mismo. Es una de las reservas ecológicas más importantes de América del Sur y por ello es el lugar ideal para el avistamiento de aves y la flora y fauna, especialmente animales en peligro de extinción, como el jaguar o el ocelote. Este parque también destaca por las ruinas arqueológicas procedentes de los asentamientos de la tribu Tayrona. Pero si realmente tienes interés por las civilizaciones pasadas, no puedes dejar de visitar Ciudad Perdida, una imponente construcción realizada en medio de la selva alrededor del año 800 DC; es decir, ¡6 siglos antes que Machu Picchu! Esta es la ciudad más famosa de los indígenas Tayrona y en ella encontrarás un sistema de construcciones muy complejas, con escaleras y caminos empedrados, así como muros intercomunicados por terrazas y plataformas.'
  },
  {
    id:4,
    imgSrc: img15,
    destTitle: 'Cabo de la Vela',
    location: 'Paisaje de ensueño',
    description: 'Colombia es un país de mezclas culturales, y una de las más interesantes se puede experimentar en La Guajira. Este es el lugar perfecto para desconectarse del mundo y disfrutar al mismo tiempo de las playas más hermosas y tranquilas de la región. Para disfrutar de ella y conocer más sobre su cultura, el Cabo de la Vela es un destino obligatorio. En el Cabo de la Vela te olvidarás del estrés de la vida moderna. Allí, rodeado de unos paisajes de ensueño, disfrutarás de una vida sencilla durmiendo en hamacas o chinchorros hechos por los indígenas. Además, en las noches podrás maravillarte con el espectacular cielo adornado con miles de estrellas. También es común ver estrellas fugaces, por lo que es muy probable que puedas ver alguna durante tu estancia en este paraíso. Para llegar a este increíble lugar debes tomar como punto de partida Riohacha, que es la capital de La Guajira, a la cuál puedes llegar en avión. Desde aquí hasta el Cabo de la Vela podrás tomar carros que se adentran en el desierto en un trayecto de alrededor de 3 horas.'
  },
  {
    id:5,
    imgSrc: img16,
    destTitle: 'Parque Nacional Natural El Tuparro',
    location: 'Ecoturismo colombiano',
    description: 'No existe la octava maravilla del mundo, pero si existiera, el Parque Nacional Natural El Tuparro lo sería. De hecho, así lo pensó el naturalista alemán Alexander von Humboldt en el siglo XIX cuando recorrió este lugar.Este parque es una reserva natural en la que convergen una extensa sabana verde con grandes ríos, bosques, pequeños caños, playas doradas y morichales, una especie de palma que forma parte del ecosistema de la Orinoquía. Además, en el Tuparro también encontrarás rocas gigantes en forma de montaña por donde corren estruendosamente las aguas del cauce del Río Orinoco. Este parque está ubicado en el Departamento del Vichada, cerca del Río Orinoco. Por esto, para visitarlo es necesario ir a Puerto Carreño a donde podrás llegar desde Bogotá por avión.  Este vuelo tiene una duración aproximada de una hora y media.'
  },
]

const destinations = () => {

  return (
    <section className='Destinations'>
      <div className='secTitle'>
      <h2>COLOMBIA, UN PARAISO</h2>
    </div>
    <div className='imgDiv'>
      <img src={img11} alt="Colombia" />
      </div>
      <br />
      <div>
        <h3>5 lugares paradisíacos que solo podrían existir en Colombia:</h3>
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
                <span className="name">{location}</span>
                </span>
                <div className="desc">
                  <p>{description}</p>
                </div>
                <hr />
              </div>
            </div>
            
            
            
          )
          

        })
        
      }
      <div className='accomodationsocials-flex'>
            <a href="https://web.whatsapp.com/" className="logo flex">
                      <h4 className='info'><SiWhatsapp className="icon" />Dejanos asesorarte</h4>
                  </a>
      
          </div>
    </section>
    
  )
}

export default destinations