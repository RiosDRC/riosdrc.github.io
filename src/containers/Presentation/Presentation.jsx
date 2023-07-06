import React from 'react'
import "./Presentation.css"
import Picture from "../../assets/img/profile_pic.jpg"

const Presentation = () => {
  return (
    <div className="app__presentation">
      <div className="app__presentation-left">
        <h2>Daniel Rios Castro</h2>
        <p>I am a motivated professional seeking a position that offers excellent
        growth opportunities and a friendly work environment. My focus is on
        pursuing a career in web development, with a current emphasis on polish
        my skills in front-end development. However, I am eager to broaden my
        expertise and eventually transition into full-stack development. I am
        dedicated to continuously improving my skills and contributing to the
        success of the team.</p>
      </div>

      <div className="app__presentation-right">
        <img src={Picture} alt="Profile_img" />
        <div className='presentation_gradient' />
      </div>
    </div>
  )
}

export default Presentation