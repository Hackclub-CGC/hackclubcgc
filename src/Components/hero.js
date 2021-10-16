import React from 'react'
import Button from 'react-bootstrap/Button'
import Typewriter from 'typewriter-effect'
import './components.css'
import logo from '../assets/logo.png'
export default function hero() {
    
    
    return (
    <>
    <hero className="hero">
        <img src={logo} alt="HC logo" className="hero-img"/>
        <p style={{fontSize:"40px"}}>
            Let's  
        <Typewriter
         options={{
            strings: ["Grow","Build","Learn","Code"],
            autoStart: true,
            loop: true,
          }}
        />  
        Together</p>
        <Button id="hero-button">Join Us</Button>
    </hero>
    
    </>    
    )
}
