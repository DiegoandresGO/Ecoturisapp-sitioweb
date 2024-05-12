import React from 'react';
import "./accommodations.css"
import img17 from '../../Assets/img (17).jpg'
import img18 from '../../Assets/img (18).jpg'
import img19 from '../../Assets/img (19).jpg'
import img20 from '../../Assets/img (20).jpg'
import img21 from '../../Assets/img (21).jpg'
import img22 from '../../Assets/img (22).jpg'
import img23 from '../../Assets/img (23).jpg'
import img24 from '../../Assets/img (24).jpg'
import img25 from '../../Assets/img (25).jpg'
import img26 from '../../Assets/img (26).jpg'
import img27 from '../../Assets/img (27).jpg'
import img28 from '../../Assets/img (28).jpg'
import img29 from '../../Assets/img (29).jpg'
import img30 from '../../Assets/img (30).jpg'
import img31 from '../../Assets/img (31).jpg'
import img32 from '../../Assets/img (32).jpg'
import img33 from '../../Assets/img (33).jpg'
import img34 from '../../Assets/img (34).jpg'
import img35 from '../../Assets/img (35).jpg'
import img36 from '../../Assets/img (36).jpg'
import { CiLocationOn } from "react-icons/ci";
import { SiWhatsapp } from "react-icons/si";

const accommodations = () => {
  return (
    <section className='Accomodations'>
        <h2 className='secTitle'>Los mejores Hoteles de Colombia</h2>
        <div className="image-container">
        <div className="image-text-pair">
        <img src={img17} alt="Image1" className="image" />
        <h3 className='image-title'>Hotel Punta Faro</h3>
        <p className='icons'>★★★★</p>
        <CiLocationOn className="icon"/> <p>El Islote</p>
        <p className="image-text">El Hotel Punta Faro se sitúa en Cartagena de Indias, tiene acceso directo a una playa privada, alberga un restaurante y ofrece habitaciones con WiFi gratuita y aire acondicionado.<a href="https://www.puntafaro.com/es/index.html">Más información...</a> </p>
      </div>

      <div className="image-text-pair">
    <img src={img18} alt="Image2" className="image" />
      <h3 className='image-title'>Hotel Casa San Agustin</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Cartagena de Indias</p>
        <p className="image-text">Se proporciona ropa de cama de lujo y servicio de habitaciones. El establecimiento cuenta con solárium, sala de juegos y bar en la piscina. Bajo petición, se organizan sesiones de masaje y servicios.<a href="https://www.hotelcasasanagustin.com/">Más información...</a> </p>
      </div>

      <div className="image-text-pair">
    <img src={img19} alt="Image3" className="image" />
      <h3 className='image-title'>Bastión Luxury Hotel</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Cartagena de Indias</p>
        <p className="image-text">El establecimiento dispone de habitaciones y suites de lujo con una decoración contemporánea que evoca su pasado colonial. Todas con TV de plano, armario grande y baño privado con artículos Loto del Sur.<a href="https://www.bastionluxuryhotel.com/">Más información...</a> </p>
      </div>

      <div className="image-text-pair">
    <img src={img20} alt="Image3" className="image" />
      <h3 className='image-title'>Four Seasons Hotel Bogotá</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Bogotá</p>
        <p className="image-text">El Four Seasons Hotel Bogotá proporciona WiFi gratuita, admite mascotas y se encuentra en la Zona T de Bogotá, a solo 500 metros de los centros comerciales Andino y El Retiro.<a href="https://www.fourseasons.com/es/bogota/">Más información...</a> </p>
      </div>
      </div>
      <div className="image-container">
      <div className="image-text-pair">
    <img src={img21} alt="Image3" className="image" />
      <h3 className='image-title'>ONE Santuario Hotel Natural</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Palomino</p>
        <p className="image-text">El ONE Santuario Hotel y Reserva Natural se encuentra en Palomino, a orillas del río Palomino, y ofrece alojamiento con restaurante, aparcamiento privado gratuito, bar y salón compartido<a href="https://www.santuario.one/">Más información...</a> </p>
      </div>

      <div className="image-text-pair">
    <img src={img22} alt="Image3" className="image" />
      <h3 className='image-title'>Hotel Boutique Casona del Colegio</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Cartagena de Indias</p>
        <p className="image-text">Este hotel combina la arquitectura colonial con un diseño colombiano lujoso y sostenible en el siglo XXI. El establecimiento está a unos 100 metros del Museo del Oro de Cartagena.<a href="https://www.casonadelcolegio.com/">Más información...</a> </p>
      </div>

      <div className="image-text-pair">
    <img src={img23} alt="Image3" className="image" />
      <h3 className='image-title'>JW Marriott Hotel Bogotá</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Bogotá</p>
        <p className="image-text">Todas las habitaciones cuentan con camas de lujo con colchones de plumón y sábanas de 300 hilos, además de TV de pantalla plana, minibar bien surtido y escritorio con silla ergonómica.<a href="https://www.marriott.com/es/hotels/bogjw-jw-marriott-hotel-bogota/overview/">Más información...</a> </p>
      </div>

      <div className="image-text-pair">
    <img src={img24} alt="Image3" className="image" />
      <h3 className='image-title'>Hotel Boutique Casa Coliseo</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Cartagena de Indias</p>
        <p className="image-text">Las lujosas habitaciones de este hotel ofrecen una decoración moderna, con suelos de piedra y TV de pantalla plana por cable. También cuentan con armario, una pequeña zona de estar y un baño privado.<a href="https://hotelcasadelcoliseocartagena.com/">Más información...</a> </p>
      </div>
      </div>
      <div className="image-container">
      <div className="image-text-pair">
    <img src={img25} alt="Image3" className="image" />
      <h3 className='image-title'>Hacienda Bambusa</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>El Caimo</p>
        <p className="image-text">El establecimiento Hacienda Bambusa cuenta con piscina al aire libre y restaurante, y está ubicado en El Caimo. Además, ofrece un jardín bien cuidado y hermosas habitaciones con una decoración elegante.<a href="https://www.haciendabambusa.com/">Más información...</a> </p>
      </div>
      <div className="image-text-pair">
    <img src={img26} alt="Image3" className="image" />
      <h3 className='image-title'>AcquaSanta Lofts Hotel</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Cali</p>
        <p className="image-text">El Acqua Santa se encuentra en Cali y tiene piscina exterior, gimnasio, decoración vanguardista de diseño, y lofts modernos con bañera de hidromasaje, WiFi gratuita y vistas a la ciudad. <a href="https://acquasanta-lofts-hotel.cali-hotels.com/es/">Más información...</a> </p>
      </div>
      <div className="image-text-pair">
    <img src={img27} alt="Image3" className="image" />
      <h3 className='image-title'>Nattivo Collection Hotel</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>San Andres</p>
        <p className="image-text">Nattivo Collection Hotel es un alojamiento de 5 estrellas que está en San Andrés, a 2 min a pie de Playa de Spratt Bight, y que tiene terraza, restaurante y bar. <a href="https://www.nattivocollectionhotel.com/?gad_source=1&gclid=CjwKCAjw0YGyBhByEiwAQmBEWm6CjhOKzAFdeQCTTY-MGDGgjyJGoyKHCLK5eYaIHzADdN0amm-HSxoCt20QAvD_BwE">Más información...</a> </p>
      </div>
      <div className="image-text-pair">
    <img src={img28} alt="Image3" className="image" />
      <h3 className='image-title'>Movich Cartagena de Indias</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Cartagena de Indias</p>
        <p className="image-text">El Movich Hotel Cartagena de Indias está situado en una calle de adoquines pintoresca y cuenta con una ubicación estratégica en el centro histórico de Cartagena, cerca de plaza de la Aduana. <a href="https://www.movichhotels.com/es/hotel-movichcartagena-en-cartagena/">Más información...</a> </p>
      </div>
      </div>
      <div className="image-container">
      <div className="image-text-pair">
    <img src={img29} alt="Image3" className="image" />
      <h3 className='image-title'>Bogotá Marriott Hotel</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Bogotá</p>
        <p className="image-text">El Bogotá Marriott Hotel ofrece habitaciones modernas, centro de fitness con spa, piscina cubierta alargada y jacuzzi. El hotel se sitúa en el distrito financiero de Bogotá. <a href="https://www.marriott.com/es/hotels/bogmc-bogota-marriott-hotel/overview/">Más información...</a> </p>
      </div>
      <div className="image-text-pair">
    <img src={img30} alt="Image3" className="image" />
      <h3 className='image-title'>Sofitel Legend Santa Clara</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Cartagena de Indias</p>
        <p className="image-text">Este antiguo monasterio del siglo XVII ofrece habitaciones con balcón privado con vistas a los jardines del hotel o al Caribe. Las habitaciones del Sofitel Legend Santa Clara Cartagena incluyen TV de pantalla plana y WiFi<a href="https://www.sofitellegendsantaclara.com/es/">Más información...</a> </p>
      </div>
      <div className="image-text-pair">
    <img src={img31} alt="Image3" className="image" />
      <h3 className='image-title'>Casa Legado</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Bogotá</p>
        <p className="image-text">Casa Legado está en Bogotá, a 3,4 km de Estadio El Campín, y dispone de alojamiento con bicicletas gratis, parking privado gratis, jardín y salón de uso común. Este hotel de 5 estrellas tiene wifi gratis.<a href="https://casalegadobogota.com/es/inicio-2/">Más información...</a> </p>
      </div>
      <div className="image-text-pair">
    <img src={img32} alt="Image3" className="image" />
      <h3 className='image-title'>Bethel Lozana Guatape</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Guatapé</p>
        <p className="image-text">Bethel Lozana Guatape se encuentra en Guatapé, a 25 km de Piedra del Peñol, y ofrece alojamiento con jardín, parking privado gratis, terraza y restaurante. Este hotel de 5 estrellas dispone de spa<a href="https://casalegadobogota.com/es/inicio-2/">Más información...</a> </p>
      </div>
      </div>
      <div className="image-container">
      <div className="image-text-pair">
    <img src={img33} alt="Image3" className="image" />
      <h3 className='image-title'>Hotel Capellán de Getsemaní</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Cartagena de Indias</p>
        <p className="image-text">El Hotel Capellán de Getsemaní está en Cartagena de Indias, a 300 metros del centro de convenciones de Cartagena, y cuenta con piscina al aire libre y terraza. Hay un bar y WiFi gratuita. <a href="https://hotelcapellandegetsemani.com/es/">Más información...</a> </p>
      </div>
      <div className="image-text-pair">
    <img src={img34} alt="Image3" className="image" />
      <h3 className='image-title'>Boutique Casa Del Arzobispado</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Cartagena de Indias</p>
        <p className="image-text">Este establecimiento ocupa un hermoso edificio colonial de la histórica ciudad amurallada de Cartagena. Cuenta con piscina, bañera de hidromasaje y sauna. También ofrece bicicletas y conexión WiFi. <a href="https://www.hotelcasadelarzobispado.com/">Más información...</a> </p>
      </div>
      <div className="image-text-pair">
    <img src={img35} alt="Image3" className="image" />
      <h3 className='image-title'>Bosko</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Guatapé</p>
        <p className="image-text">Bosko se encuentra en Guatapé, a 2 km de Piedra del Peñol, y ofrece alojamiento con piscina al aire libre, parking privado gratis, jardín y terraza. <a href="https://bosko.com.co/?gad_source=1&gclid=CjwKCAjw0YGyBhByEiwAQmBEWksok-VKAQIXfNF3bAEj8aHcERVWO5ABlCnjZOG0ggG69-BWWfVPihoCwigQAvD_BwE">Más información...</a> </p>
      </div>
      <div className="image-text-pair">
    <img src={img36} alt="Image3" className="image" />
      <h3 className='image-title'>The Boato Hotel</h3>
        <p className='icons'>★★★★★</p>
        <CiLocationOn className="icon"/> <p>Guatapé</p>
        <p className="image-text">The Boato Hotel está en Guatapé, a 5,1 km de Piedra del Peñol, y dispone de alojamiento con jardín, parking privado gratis, terraza y restaurante. <a href="https://boatohotel.com/">Más información...</a> </p>
      </div>
      </div>    
      <div className='accomodationsocials-flex'>
          <a href="https://web.whatsapp.com/" className="logo flex">
                    <h4 className='info'><SiWhatsapp className="icon" />RESERVA AHORA</h4>
                </a>
        </div>
    </section>
  )
}

export default accommodations