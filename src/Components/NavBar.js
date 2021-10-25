import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './components.css'

import {Link} from 'react-router-dom'
export default function NavBar() {
    return (
        <>
 
      <Navbar variant="light" sticky="top" >
      <Container>
      <Navbar.Brand href="/home" className="nav-brand">HackClub CGC</Navbar.Brand>
      <Nav className="flex-row nav-items">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/Events" className="nav-item">Events</Link>
      <Link to="/projects" className="nav-item">Projects</Link>
      <Link to="/Team" className="nav-item">Team</Link>
      <Link to="/Aboutus" className="nav-item">About Us</Link>
      <Link to="/Resources" className="nav-item">Resources</Link>
      <Link to="/Contactus" className="nav-item">Contact Us</Link>
    </Nav>
    </Container>
  </Navbar>
</>
    )
}
