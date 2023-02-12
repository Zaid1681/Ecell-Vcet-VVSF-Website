import React from 'react'
import "./Speaker.css"

const Speaker = (props) => {
  return (
    <div className='speakerContainer section-padding text-center  '>
        <img className='speakerImg ' src="https://www.lifepositive.com/photos/MjAxOS0wNy0yMiAwNToxOToxMg==_Harish%20%20Mehta.jpg" alt="" />
        <h3 className='speakerTitle card-tile'>{props.header}</h3>
        <p className='speakerSubtitle p-10 card-subtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, sit possimus. Fuga totam aspernatur doloremque aliquam ipsam autem qui recusandae.</p>
    </div>
  )
}

export default Speaker
