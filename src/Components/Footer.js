import React from 'react'
import './components.css'

export default function Footer() {

    const follow = ["Insta","Linkedin"]
    const followlist = follow.map((f)=> <li style={{listStyleType:"none" }}>{f}</li>)
    return (
        <>
        <div className="footer">
            <div className="footer-items">
                <p style={{marginTop:"10px"}}>About us</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestiae voluptas autem veniam a, laudantium animi voluptate voluptates nulla omnis?</p>
                <p style={{marginTop:"10px",color:"white", fontSize:"30px"}}><strong>HackClub CGC</strong> </p>
            </div>
            <div className="footer-items">
            <h6 style={{color:"white"}}>Follow Us</h6>
            <ul>
            {followlist}
            </ul>

            </div>
            <div className="footer-items">
                <h6 style={{color:"white"}}>Contact us</h6>
                <p>hackclubcgc@gmail.com</p>
            </div>
            
        </div>
        <div className="footer-text">  
        HackClub CGC &copy; {new Date().getFullYear()} 
        </div>
        </>
    )
}
