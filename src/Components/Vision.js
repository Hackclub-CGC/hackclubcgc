import React from 'react'
import './components.css'
import Icon from '@hackclub/icons'

export default function Vision() {
    return (
        <div className='Vmain'>
            
            <div className='Vcards'>
                <div className='V-items Vi' style={{flexBasis:"33%"}}> 
                <img src="https://assets.hackclub.com/flag-standalone-bw.svg" alt="HackClub-logo" className='Vlogo1' />
                <h4>Hackclub</h4> 
                
                <p>Hack Club is a global nonprofit network of high school makers & student-led coding clubs where young people build the agency, the network, & the technical talent to think big & do big things in the world. </p>
                </div>
                <div className='V-items Vi' style={{flexBasis:"33%"}}>
                    <Icon glyph="flag" size={64} className='Vlogo' />

                    <h4>Mision</h4> 
                    <p >Our objective is to foster learners with a creator attitude to their full extent and equip them with every resource possible. This club is a platform where every idea and field is worth exploring. </p>
                </div>
                <div className='V-items Vi' style={{flexBasis:"33%"}}> 
                    <Icon glyph="explore" size={64} className='Vlogo' />
                    <h4>Vision</h4> 
                    <p> We envision a world where no learner is left behind. We Aim to create a space where every Student works in harmony with one another so as to establish a  mutually beneficial forum of ideas and experiences.</p>
                
                </div>

            </div>
            
        </div>
    )
}
