import React from 'react'
import "./Education.css"
import { education } from '../../constants/data'

const Education = () => {
  return (
    <div className="app__education" id='education'>
      <h2>Education</h2>
      <div className="app__education-boxCard">
        {education.map(item=>(
          <div className="app__education-boxCard_card" key={item.id}>
            <h3>{item.inst}</h3>
            <h4>{item.year}</h4>
            <p>{item.area}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education