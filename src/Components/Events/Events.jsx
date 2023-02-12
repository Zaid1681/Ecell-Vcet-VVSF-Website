import React from 'react'
import Card from '../../Container/Card/Card.jsx'
import "./Events.css"

const Events = () => {
  return (
    <div className='eventContainer content-padding' id='events'>
      <div className="eventHeader section-padding">
        <h1 className='text-center main-title-font'>Our Events</h1>
        <hr className='line-padding m-auto' />
      </div>
      <div className="eventsCards content-padding">
        <Card img=""/>
        <Card img="" />
        <Card img=""/>
      </div>

    </div>
  )
}

export default Events
