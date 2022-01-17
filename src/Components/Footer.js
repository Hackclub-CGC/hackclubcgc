import React from 'react'
import './components.css'

export default function Footer() {

    const follow = ["Insta","Linkedin"]
    const followlist = follow.map((f)=> <li style={{listStyleType:"none" }}>{f}</li>)
    

    return (
        <>
            <div className="footer">
                <div className="footer-items">
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
                    <a href = "mailto:hackclubcgc@gmail.com?subject = Feedback&body = Message" target="_blank" rel="noreferrer">
                    Send Feedback
                    </a>
                </div>
                
            </div>
            <div className="footer-text">
            Copyright &copy; {new Date().getFullYear()} HackClub CGC
            </div>
        </>
    )
}
