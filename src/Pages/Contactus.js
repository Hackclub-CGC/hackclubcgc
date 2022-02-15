import React from 'react'
import './pages.css'

import Contactpng from '../assets/contactpng.png'
export default function Contactus() {
    return (
        <div className='contact-main'>
            <p  style={{color:"black",}}>Have a question?</p>
            <h1 >We're here</h1>
            <img id='con-png' src={Contactpng} alt=""></img>
            <p >Drop an e-mail to our inbox </p>
            <p><a className='mail-link' href="mailto:hackclubcgc@gmail.com">hackclubcgc@gmail.com</a></p>
            

            
        </div>
    )
}
