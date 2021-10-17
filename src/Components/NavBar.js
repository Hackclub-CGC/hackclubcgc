import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './components.css'
export default function NavBar() {
    return (
        <>
 
  <Navbar variant="light" sticky="top" > 
    <Container>
    <Navbar.Brand href="#home" className="nav-brand">HackClub CGC</Navbar.Brand>
    <Nav className="flex-row nav-items">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Events">Events</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#Team">Team</Nav.Link>
      <Nav.Link href="#About">About Us</Nav.Link>
      <Nav.Link href="#Resources">Resources</Nav.Link>
      
      <Nav.Link href="#Contact">Contact Us</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
</>
    )
}
