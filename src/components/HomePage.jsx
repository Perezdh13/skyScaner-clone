import React from 'react'
import photo from "../image/background.jpg"
import london from "../image/london.jpg"
import paris from "../image/paris.jpg"
import roma from "../image/roma.jpg"
import madrid from "../image/madrid.jpg"
import amsterdan from "../image/amsterdan.jpg"
import palma from "../image/palma.jpg"
import barcelona from "../image/barcelona.jpg"
import bruselas from "../image/bruselas.jpg"
import lisboa from "../image/lisboa.jpg"

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
                <h2>Popular ahora</h2>
                <p>A otros viajeros les encantan estos destinos.Busca vuelos, hoteles y coches de alquiler y únete a la aventura</p>
            </div>
            <div className='homePage-internalLinks'>

                <div className='homePage-internalLinks-city'>
                    <div className='homePage-internalLinks-img'>
                        <img src={london} alt='london' />
                    </div>
                    <div className='homePage-internalLinks-citiText'>
                        <h3>Londres</h3>
                        <ul>
                            <li>Vuelos</li>
                            <li>Hoteles</li>
                            <li>Alquiler de coches</li>
                        </ul>
                    </div>

                </div>
                <div className='homePage-internalLinks-city'>
                    <div className='homePage-internalLinks-img'>
                        <img src={paris} alt='paris' />
                    </div>
                    <div className='homePage-internalLinks-citiText'>
                        <h3>Paris</h3>
                        <ul>
                            <li>Vuelos</li>
                            <li>Hoteles</li>
                            <li>Alquiler de coches</li>
                        </ul>
                    </div>
                </div>
                <div className='homePage-internalLinks-city'>

                    <div className='homePage-internalLinks-img'>
                        <img src={roma} alt='roma' />
                    </div>
                    <div className='homePage-internalLinks-citiText'>
                        <h3>Roma</h3>
                        <ul>
                            <li>Vuelos</li>
                            <li>Hoteles</li>
                            <li>Alquiler de coches</li>
                        </ul>
                    </div>
                </div>
                <div className='homePage-internalLinks-city'>
                    <div className='homePage-internalLinks-img'>
                        <img src={madrid} alt='madrid' />
                    </div>
                    <div className='homePage-internalLinks-citiText'>
                        <h3>Madrid</h3>
                        <ul>
                            <li>Vuelos</li>
                            <li>Hoteles</li>
                            <li>Alquiler de coches</li>
                        </ul>
                    </div>
                </div>
                <div className='homePage-internalLinks-city'>
                    <div className='homePage-internalLinks-img'>
                        <img src={amsterdan} alt='amsterdan' />
                    </div>
                    <div className='homePage-internalLinks-citiText'>
                        <h3>Ámsterdam</h3>
                        <ul>
                            <li>Vuelos</li>
                            <li>Hoteles</li>
                            <li>Alquiler de coches</li>
                        </ul>
                    </div>
                </div>
                <div className='homePage-internalLinks-city'>
                    <div className='homePage-internalLinks-img'>
                        <img src={palma} alt='palma' />
                    </div>
                    <div className='homePage-internalLinks-citiText'>
                        <h3>Palma de Mallorca</h3>
                        <ul>
                            <li>Vuelos</li>
                            <li>Hoteles</li>
                            <li>Alquiler de coches</li>
                        </ul>
                    </div>
                </div>
                <div className='homePage-internalLinks-city'>
                    <div className='homePage-internalLinks-img'>
                        <img src={barcelona} alt='barcelona' />
                    </div>
                    <div className='homePage-internalLinks-citiText'>
                        <h3>Barcelona</h3>
                        <ul>
                            <li>Vuelos</li>
                            <li>Hoteles</li>
                            <li>Alquiler de coches</li>
                        </ul>
                    </div>
                </div>
                <div className='homePage-internalLinks-city'>
                    <div className='homePage-internalLinks-img'>
                        <img src={bruselas} alt='bruselas' />
                    </div>
                    <div className='homePage-internalLinks-citiText'>
                        <h3> Bruselas</h3>
                        <ul>
                            <li>Vuelos</li>
                            <li>Hoteles</li>
                            <li>Alquiler de coches</li>
                        </ul>
                    </div>
                </div>
                <div className='homePage-internalLinks-city'>
                    <div className='homePage-internalLinks-img'>
                        <img src={lisboa} alt='lisboa' />
                    </div>
                    <div className='homePage-internalLinks-citiText'>
                        <h3>Lisboa</h3>
                        <ul>
                            <li>Vuelos</li>
                            <li>Hoteles</li>
                            <li>Alquiler de coches</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='homePage-footerDiv'>
                <p>Reserva vuelos baratos, hoteles y coches de alquiler con Skyscaner</p>
                <hr></hr>
                <p> Únete a 100 millones de viajeros expertos y compara vuelos, hoteles y coches de cienytos de proveedores. Aquí te explicamos cómo</p>
                <hr></hr>
                <p>Nuestros sitios web internacionales</p>
                <hr></hr>
            </div>

        </div>
    )
}

export default HomePage