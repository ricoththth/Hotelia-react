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
                        <p>Sobre nosotros</p>
                        <h4>Bienvenidos a Hotelia, encuentra habitaciones confortables a buen precio</h4>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h6>
                        
                        <section className='lineadeicons'>
                        <div className='icons-home'>
                        <i class="fa-solid fa-building fa-2x"/> 60 
                        </div> <p>habitaciones</p>
                        <div className='icons-home'>
                        <i class="fa-solid fa-face-smile fa-2x"/> 60
                        </div><p>habitaciones</p>
                        <div className='icons-home'>
                        <i class="fa-solid fa-wifi fa-2x"/> 60
                        </div><p>habitaciones</p>
                        </section>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Description