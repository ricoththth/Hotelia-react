import React from 'react'
import "../navbar/Navbar.css"

function Navbar() {
  return (
    <section className='navbarcont'>
      <div className='logo'>
      <img src="https://i.postimg.cc/Z5JQdkCT/logo2.png" alt='logo azul con campana y nombre de Hotellia' className='navbarimage'/>
      </div>
      <div className='contenido'>
        <div className='arriba'>
          <div className='detalles'>
          <i class="fa-solid fa-location-dot"/>  Colombia, Bogota 
          <i class="fa-solid fa-phone"/>  3xx xx xx xxx
          </div>
          <div className='user'>
          <i class="fa-solid fa-arrow-right-to-bracket"/> Ingresar   
          <i class="fa-solid fa-user-plus"/> Registrar  
          </div>
        </div>
        <div className='abajo'>
            <li>Inicio</li>
            <li>Habitaciones</li>
            <li>Contactanos</li>
        </div>
      </div>
    </section>
  )
}

export default Navbar