import React from 'react'
import './components.css'


export default function whatwedo() {
    
    return (
        <div className="Wmain" >
            <h3>What We Do</h3>
            <p><strong>We code, learn and teach together. We believe in open source and innovation. We organize bootcamps, events, community sessions and make projects</strong> </p>
            <div className="Wcards">
                <div className="Wc-items" style={{flexBasis:"33%"}}> <div className="ci">
                    <h4>Seminars</h4>
                    <img src='https://cloud-jk9cgimyk-hack-club-bot.vercel.app/06101073.jpg' alt='logo' className='cphoto' ></img><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>  </div>
                <div className="Wc-items" style={{flexBasis:"33%"}}><div className="ci">
                <h4>Projects</h4>
                <img src='https://cloud-jk9cgimyk-hack-club-bot.vercel.app/06101073.jpg' alt='logo' className='cphoto' ></img><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div></div>
                <div className="Wc-items" style={{flexBasis:"33%"}}><div className="ci">
                <h4>Community Meetups</h4>
                <img src='https://cloud-jk9cgimyk-hack-club-bot.vercel.app/06101073.jpg' alt='logo' className='cphoto' ></img><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </div></div>
            </div>
        </div>
    )
}

