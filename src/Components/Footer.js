import React from 'react'
import './components.css'

export default function Footer() {


    

    return (
        <>
            <div className="footer">
                <div className="footer-items">
                    <p style={{marginTop:"2rem",color:"white", fontSize:"30px"}}><strong>HackClub CGC</strong> </p>
                </div>
                <div className="footer-items">
                <h6 style={{color:"white"}}>Connect to Us</h6>
                <a href="https://www.linkedin.com/company/hackclubcgc" target="_black"><img className='socialImg' src="https://img.icons8.com/material-sharp/24/000000/linkedin--v2.png" alt='linkedin' /></a>
                <a href="https://www.instagram.com/hackclubcgc/" target="_black"><img className='socialImg' src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png" alt='instagram'/></a>
                

                </div>
                <div className="footer-items" >
                    <h6 style={{color:"white"}}>Mail us</h6>
                    <p >hackclubcgc@gmail.com</p>
                    
                </div>
                
            </div>
            <div className="footer-text">
            Copyright &copy; {new Date().getFullYear()} HackClub CGC
            </div>
        </>
    )
}
