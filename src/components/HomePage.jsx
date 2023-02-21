import React from 'react'
import photo from "../image/background.jpg"

function HomePage() {
    return (
        <div className='homePage'>
            <div className='homePage-globalNavigationCards'>
                <div className='homePage-globalNavigationCards-hotel'>
                    <div className='cardImg'>
                        <img src="https://content.skyscnr.com/m/4ea859fccbae623a/original/nav_card_hotels_clear.svg" alt="" />
                    </div>
                    <div className='cardSpan'>
                        <span>Hoteles</span>
                    </div>
                </div>
                <div className='homePage-globalNavigationCards-rentCars'> 
                    <div className='cardImg'>
                        <img src="https://content.skyscnr.com/m/4d0c8b1208d2541e/original/nav_card_car_hire_clear.svg" alt="" />
                    </div>
                    <div className='cardSpan'>
                        <span>Alquiler de coches</span>
                    </div>
                </div>
                <div className='homePage-globalNavigationCards-Explore'>
                    <div className='cardImg'>
                        <img src="https://content.skyscnr.com/m/10a707275f1ec5d0/original/explore-everywhere.svg" alt="" />
                    </div>
                    <div className='cardSpan'>
                        <span>Explora el mundo entero</span>
                    </div>
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