import React from 'react'
import logo from '../image/logo.png'
import world from '../image/world.png'
import user from '../image/user.png'
import menu from '../image/menu.png'



function HeadBar() {
  return (

    <div className='container-navbar'>
    <div className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt = "logo" className="logo"/>
      </div>
      <div className="navbar-icons">
      <img src={world} alt = "world" className="world"/>
      <img src={user} alt = "user" className="user"/>
      <img src={menu} alt = "menu" className="menu"/>
      </div>
    </div>
    <h1>Busca rápido en tus sitios de viajes favoritos</h1>

    <div className='search'>
      <section className='from'>
      <p>Desde</p>
      <p className='description'>Asturias(OVD)</p>
      </section>
      <section className='to'>
        <p>A</p>
        <p className='description'>País, ciudad o aeropuerto</p>
        </section>
        <section className='go'>
        <p>Ida</p>
        <p className='description'>Añadir fecha</p>
        </section>
        <section className='return'>
        <p>Vuelta</p>
        <p className='description'>Añadir fecha</p>
        </section>
        <section className='travellers'>
        <p>Viajeros y clase de cabina</p>
        <p className='description'>1 Adulto, Turista</p>
        </section>

        <button className='btn-search'>
          Buscar
        </button>
    </div>
      
      <div className='checkbox-div'>
      <input type='checkbox'/> <span className='checkbox-text'>Vuelos directos</span>
      </div>
    </div>
  )
}

export default HeadBar