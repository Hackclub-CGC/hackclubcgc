import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './components.css'
import Icon from '@hackclub/icons'

import {Link} from 'react-router-dom'
export default function NavBar() {

   const [toggle, setToggle] = useState(false);

   const Toggle = () => {
        setToggle(!toggle);
   }

    return (
      <>
      <Navbar variant="light" bg="light" sticky="top" >
      <Container>
      <Navbar.Brand href="/" className="nav-brand">HackClub CGC</Navbar.Brand>
      <Nav className={"flex-row nav-items"}>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/Events" className="nav-item">Events</Link>
        {/* <Link to="/projects" className="nav-item">Projects</Link> */}
        <Link to="/Team" className="nav-item">Team</Link>
        <Link to="/Resources" className="nav-item">Resources</Link>
        <Link to="/Contactus" className="nav-item">Contact Us</Link>
      </Nav>

      </Container>
      <button  className='toggle-btn' onClick={Toggle}>
        <Icon glyph="align-right" size={64} />
      </button>

  </Navbar>
  <Nav className={toggle ? "flex-column list-disp1" : "list-disp" }>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/Events" className="nav-item">Events</Link>
       {/*  <Link to="/projects" className="nav-item">Projects</Link> */}
        <Link to="/Team" className="nav-item">Team</Link>
        <Link to="/Resources" className="nav-item">Resources</Link>
        <Link to="/Contactus" className="nav-item">Contact Us</Link>
  </Nav>
</>
    )
}
