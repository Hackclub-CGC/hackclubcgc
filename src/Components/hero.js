import React from 'react'
import Button from 'react-bootstrap/Button'
import './components.css'
import logo from '../assets/logo.png'
export default function hero() {
    const txtArr =["Grow","Build","Learn","Code"]
    let changingText;
    setInterval(() => {for (var i = 0; i < txtArr.length; i++) {
        changingText = txtArr[i];
      }
        
    },1500);
    return (
    <>
    <hero className="hero">
        <img src={logo} alt="HC logo" className="hero-img"/>
        <p style={{fontSize:"50px"}}>Let's  {changingText}  Together</p>
        <Button id="hero-button">Join Us</Button>
    </hero>
    
    </>    
    )
}
