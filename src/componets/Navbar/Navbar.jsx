import React, { useState } from 'react'
import { TfiBlackboard } from "react-icons/tfi"
import { CgMore, CgMoreVertical } from "react-icons/cg"
import "./Navbar.css"

const Links = () => (
    <>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#education">Education</a>
    </>
);

const Navbar = () => {
    const [ toggle, setToggle ] = useState(false);

  return (
    <div className="app__navbar">
        <div className="app__navbar-logo">
            <TfiBlackboard  color='white' fontSize="40px"/>
        </div>
        <div className="app__navbar-links">
            <Links />
        </div>
        <div className="app__navbar-title">
            <h1>Rios' Portfolio</h1>
        </div>
        <div className="app__navbar-toggleMenu">
            {toggle
                ? <CgMore onClick={()=>setToggle(prev=>!prev)}/>
                : <CgMoreVertical onClick={()=>setToggle(prev=>!prev)}/>
            }
            {toggle && <div className="toggleMenu_links"><Links /></div>}
        </div>
    </div>
  )
}

export default Navbar