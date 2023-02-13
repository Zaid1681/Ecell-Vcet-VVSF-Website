import React from 'react'
import "./Pitches.css"
import i1 from "../../assets/i1.jpg"
import i2 from "../../assets/i2.png"
import i3 from "../../assets/i3.png"
import i4 from "../../assets/i4.jpg"

const Pitches = () => {
  return (
    <div className='content-padding pitchesContainer'>
        <div className="pitchesHeader text-center section-padding">
            <h1 className=' main-title-font "'>Pitches</h1>
            <hr className='m-auto line-padding' />

            <div className='pitchCarousel'>
              <div id="carouselExampleIndicators" class="carousel slide carousel-fade " data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner" data-bs-interval="1000">
                  <div class="carousel-item active">
                    <img src={i1} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={i2} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={i3} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={i4} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

        </div>
      
    </div>
  )
}

export default Pitches
