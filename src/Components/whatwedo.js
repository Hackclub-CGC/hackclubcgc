import React from 'react'
import './components.css'


export default function whatwedo() {

    return (
        <div className="Wmain" >
            <h3>What We Do</h3>
            <p>We code, learn and teach together. We believe in open source and innovation. We organize bootcamps, events, community sessions and make projects</p>
            <div className="Wcards">
                <div className="Wc-items" style={{flexBasis:"33%"}}> <div className="ci">
                    <h4>Seminars</h4>
                    <img src='https://cloud-3g87c4q0z-hack-club-bot.vercel.app/0conference.webp' alt='logo' className='cphoto' ></img><br/>
                    </div></div>
                <div className="Wc-items" style={{flexBasis:"33%"}}><div className="ci">
                    <h4>Community Meetups</h4>
                    <img src='https://cloud-c00ope9v5-hack-club-bot.vercel.app/0meetup.jpg' alt='logo' className='cphoto' ></img><br/>
                </div></div>
                <div className="Wc-items" style={{flexBasis:"33%"}}><div className="ci">
                    <h4>Projects</h4>
                    <img src='https://cloud-md2w5srkb-hack-club-bot.vercel.app/0proj.jpg' alt='logo' className='cphoto' ></img><br/>
                    </div></div>
            </div>
        </div>
    )
}

