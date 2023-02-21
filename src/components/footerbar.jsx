import React from 'react'
import spain from '../image/spain.png'

function FooterBar() {
  return (
    <div className='Footer-grid'>
      <div>
        <p className='Footer-flag'><img src={spain} alt="flag" width={20}></img>España Español (ES)  €EUR</p>
      </div>
      <div>
        <p>Ayuda</p>
        <p>Configuración de privacidad</p>
        <p>Iniciar Sesión</p>
      </div>
      <div>
        <p>Política de cookies</p>
        <p>Política de privacidad</p>
        <p>Términos de servicio</p>
        <p>Información de la empresa</p>
      </div>
      <div>
        <p>Explorar</p>
        <p>Compañía</p>
        <p>Partners</p>
        <p>Viajes</p>
        <p>Sitios internacionales</p>
      </div>
      <div>
        <p> ∨</p>
        <p> ∨</p>
        <p> ∨</p>
        <p> ∨</p>
        <p> ∨</p>
      </div>

    </div>

  )
}

export default FooterBar