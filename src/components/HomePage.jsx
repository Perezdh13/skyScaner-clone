import React from 'react'
import photo from '../image/background.jpg'
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
                <img className='homePage-promo-photo' src={photo} alt='photo'/>
            </div>
            <div className='homePage-internalLinks'>

            </div>
            <div className='homePage-footerDiv'>

            </div>

        </div>
    )
}

export default HomePage