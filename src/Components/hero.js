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
        <p style={{fontSize:"30px",display:"flex",flexDirection:"row"}} >
            Let's  &nbsp; <Typewriter
         options={{
            strings: ["Grow","Build","Learn","Code"],
            autoStart: true,
            loop: true,
            deleteSpeed:100,
            pauseFor:1000,
          }}
        /> &nbsp;Together
        
        </p>
        <Button id="hero-button">Join Us</Button>
    </hero>
    
    </>    
    )
}
