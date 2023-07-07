import React from 'react'
import "./Work.css"
import circle from "../../assets/circle.svg"
import { MdWorkHistory } from "react-icons/md" 

const Work = () => {
  return (
    <div className='app__workHistory' id='work'>
        <h2>Work History</h2>
        <div className="app__workHistory-container">
            <div className="app__workHistory-container_img">
                <img src={circle} alt=''/>
                <MdWorkHistory />
            </div>
            <div className="app__workHistory-container_text">
                <h3>Bilingual Customer Service Representative</h3>
                <h4>Sykes, San Pedro</h4>
                <p>I was in charge of filing fraud reports, reissuing new credit cards, and
                unblocking the bank accounts when there was no fraud. Moreover, I
                updated customer information when needed and performed other basic
                banking functions.</p>
            </div>
        </div>
    </div>
  )
}

export default Work