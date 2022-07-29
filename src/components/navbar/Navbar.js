import React from 'react'
import "../navbar/Navbar.css"

function Navbar() {
  return (
    <section className='navbarcont'>
      <div className='logo'>
      </div>
      <div className='contenido'>
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