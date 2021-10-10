import React from 'react'


import Button from 'react-bootstrap/Button'
import './components.css'
import logo from '../assets/logo.png'
export default function hero() {
    return (

    <div className="hero">
        <div className="hero-item">
            <h1 > <span style={{color:"#FD0101"}}>HackClub</span> <br/>
            <span style={{color:"#2A9CEF"}}>CGC</span>
            </h1>
  
         <Button id="hero-button" > Join Us</Button>
            </div>
        <div className="hero-item"><img src={logo} alt="herologo" className="hero-img"></img></div>
    </div>
        
    )
}
