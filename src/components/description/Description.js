import React from 'react'
import "../description/Description.css"

function Description() {
    return (
        <div>

            <section className='first-description'>
                <div className='content-home'>
                    <div className='image-home'>
                        <img src="https://i.postimg.cc/xTMjvjmD/toa-heftiba-m7r1-BVo-WTAk-unsplash-1.jpg" />
                    </div>
                    <div className='description-home'>
                        <h2>Sobre nosotros</h2>
                        <h4>Bienvenidos a Hotelia, encuentra habitaciones confortables a buen precio</h4>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h6>
                        
                        <section className='lineadeicons'>


                        <div>
                        <div className='icons-home'>
                        <i class="fa-solid fa-building fa-2x"/> 
                        </div> 
                        <h5 className='number-icons'>60</h5>
                        <p className='text-icons'>habitaciones</p>
                        </div>

                        <div>
                        <div className='icons-home'>
                        <i class="fa-solid fa-face-smile fa-2x"/> 
                        </div>
                        <h5 className='number-icons'>60</h5>
                        <p className='text-icons'>habitaciones</p>
                        </div>

                        <div>
                        <div className='icons-home'>
                        <i class="fa-solid fa-wifi fa-2x"/> 
                        </div>
                        <h5 className='number-icons'>60</h5>
                        <p className='text-icons'>habitaciones</p>
                        </div>
                        
                        </section>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Description