import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button'

import './components.css'
import logo from '../assets/logo.png'
export default function hero() {
    return (
        <div  className="hero">
        <Container >
        <Row >
            <Col className="hero-text">
            <h1 > <span style={{color:"#FD0101"}}>HackClub</span> <br/><span style={{color:"#2A9CEF"}}>CGC</span></h1>
            <br/>
            <Button > Join Us</Button>
            
            </Col>
            <Col id="himg">
            <img src={logo} alt="herologo" className="hero-img"></img>
            </Col>
        </Row>
  
    </Container>
        </div>
    )
}
