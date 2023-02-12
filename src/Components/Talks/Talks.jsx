import React from 'react'
import "./Talks.css"
import Speaker from "../../Container/Speaker/Speaker"

const Talks = () => {
    return (
        <div className='talksContainer content-padding' id='talks'>
            <div className="talksHeader section-padding">
                <h1 className='text-center main-title-font'>E-Talks</h1>
                <hr className='line-padding m-auto' />
            </div>
            <div className="speakersContainer content-padding">
                <Speaker header="Harish Mehta" />
                <Speaker header="Harish Mehta"  />
                <Speaker  header="Harish Mehta"  />
                <Speaker  header="Harish Mehta"  />
                <Speaker  header="Harish Mehta"  />
                <Speaker  header="Harish Mehta"  />

            </div>


        </div>
    )
}

export default Talks
