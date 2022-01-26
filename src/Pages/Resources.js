import React from 'react'
import Button from 'react-bootstrap/Button'


export default function Resources() {
    return (
        <div className='resources'>
            <div className='H-items'>
                <strong>
                    <p>GET EXCLUSIVE ACCESS TO THE RESOURCES</p>
                    <ul>
                        <li>Python</li>
                        <li>C/C++</li>
                        <li>JavaScript</li>
                        <li>Github</li>
                        <li>Web Development</li>
                        <li>Open Source</li>
                    </ul>
                </strong>
                <h2>Join Community to get access to curated content by HackClub CGC</h2>
                <Button className='comm-button' href={"https://lu.ma/HackClubCGC"} target="_blank">Join </Button>
            </div>
        </div>
    )
}
