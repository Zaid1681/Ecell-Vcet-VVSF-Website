import React from 'react'
import "./AboutContent.css"

const ReverseAboutContent = (props) => {
  return (
    <div className='aboutContainer content-padding' style={{"flexDirection":"row-reverse"}}>
      <div className="aboutImg">
        <img  className='aboutRImage'  src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg" alt="" />
      </div>
      <div className='aboutContent'>
        <h1 className='text-title'>{props.header}</h1>
        <p className='text-subtitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad adipisci quia deleniti nulla, sequi pariatur reiciendis? Dolorum nisi velit hic itaque quisquam et ipsum facilis? Autem dicta distinctio laudantium tenetur, eum nesciunt enim iusto. Vitae error minima molestiae pariatur! Quae eaque error doloremque dolore ea id quo pariatur sunt provident, praesentium, rem quisquam inventore, sint placeat doloribus molestiae sequi soluta hic quasi unde consectetur recusandae eveniet iste ducimus. Dolorum, ea veritatis. Odio, quidem. Iste voluptatum aspernatur soluta quia, nulla quidem?</p>

      </div>
    </div>
  )
}

export default ReverseAboutContent
