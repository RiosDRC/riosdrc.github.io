import React from 'react'
import "./Skills.css"
import { SiCss3, SiSass, SiJavascript, SiHtml5, SiReact } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { TbBrandMysql } from "react-icons/tb"
import Python from "../../assets/Python-logo.svg"

const Card = ({ title, icon, img }) => (
    <div className="app__skills-cardBox_card slide-in-elliptic-bottom-fwd">
        {icon}
        {img ?
        <div className="card_img">
            <img src={img} alt="python" />
        </div>
        : ""
        }
        <h4>{title}</h4>
    </div>
)

const Skills = () => {
  return (
    <div className="app__skills" id='skills'>
        <h2>Skills</h2>
        <div className="app__skills-cardBox">
            <Card title="JavaScript" icon={ <SiJavascript color='rgb(232, 241, 59)'/>}/>
            <Card title="CSS" icon={ <SiCss3 color='rgb(0, 110, 255)'/>}/>
            <Card title="SCSS" icon={ <SiSass color='rgb(231, 92, 171)'/>}/>
            <Card title="HTML" icon={ <SiHtml5 color='rgb(225, 102, 25)'/>}/>
            <Card title="React" icon={ <SiReact color='rgb(25, 192, 225)'/>}/>
            <Card title="Node.js" icon={ <FaNodeJs color='rgb(2, 141, 28)'/>}/>
            <Card title="MySQL" icon={ <TbBrandMysql color='rgb(0, 104, 152)'/>}/>
            <Card title="Python" img={Python} />
        </div>
        <div className='app__skills-gradient' />
    </div>
  )
}

export default Skills