import React from 'react'
import './components.css'
import logo from '../assets/logo.png'

export default function AboutUs() {
    return (
        <div className='aboutus'>
           {/*  <h3>About Us</h3>
            
            <p className='about-card'>"Alone, we can do so little together, we can do so much" - Helen Keller <br></br>
            <br></br>
                Pioneered by three visionary students who wanted better for their fellow coders, HackClub CGC is one of its kind.
                We are a group of people pooling our skills to help out each other and ultimately grow together. <br></br>
                "We're at our best when we are making" is our motto. All you need to join the club is a learning attitude. <br></br><br></br>
                We are by the coders and for the coders.
                <br></br>
                </p> */}
                <h3>About Us</h3>
            
                <p className='about-card'>
                    <img src={logo} alt='hccgclogo' className='abt-logo' ></img><br></br>
                    HackClub CGC is a team pioneered  by Learners for learners. This club was founded on a common sentiment to beat the toxic norm of mediocre education. 
                <br></br>
                We are a subsidiary of the world's Best NPO. What gets us going is the same goal in our hearts to explore and grasp new fields and help our fellows in the process.It's not only learning that we pursue, it's how to enjoy oneself in the path to a goal that we look forward to. Our Community's welfare is paramount to us. Team HC CGC is one for the ages.
                </p>
        </div>
    )
}
