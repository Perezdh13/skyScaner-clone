import React from 'react'
import photo from "../image/background.jpg"

function HomePage() {
    return (
        <div className='homePage'>
            <div className='homePage-globalNavigationCards'>
                <div className='homePage-globalNavigationCards-hotel'>

                </div>
                <div className='homePage-globalNavigationCards-rentCars'>

                </div>
                <div className='homePage-globalNavigationCards-Explore'>

                </div>
            </div>
            <div className='homePage-promo'>
                <img className='homePage-promo-photo' src={photo} alt='' />
            </div>
                <div className='homePage-internalLinks-text'>
                    <h3>Popular ahora</h3>
                    <p>A otros viajeros les encantan estos destinos.Busca vuelos, hoteles y coches de alquiler y únete a la aventura</p>
                </div>
            <div className='homePage-internalLinks'>

                <div className='homePage-internalLinks-Londres'>

                </div>
                <div className='homePage-internalLinks-Paris'>

                </div>
                <div className='homePage-internalLinks-Roma'>

                </div>
                <div className='homePage-internalLinks-Madrid'>

                </div>
                <div className='homePage-internalLinks-Amsterdam'>

                </div>
                <div className='homePage-internalLinks-Palma'>

                </div>
                <div className='homePage-internalLinks-Barcelona'>

                </div>
                <div className='homePage-internalLinks-Bruselas'>

                </div>
                <div className='homePage-internalLinks-Lisboa'>

                </div>
            </div>
            <div className='homePage-footerDiv'>

            </div>

        </div>
    )
}

export default HomePage