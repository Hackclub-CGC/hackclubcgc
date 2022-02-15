import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-router-dom'
import './components.css'
import Icon from '@hackclub/icons'
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
        <NavLink exact to="/" className="nav-item">Home </NavLink>
        <NavLink exact to="/events" className="nav-item">Events</NavLink>
        {/* <NavLink exact to="/projects" className="nav-item">Projects</NavLink> */}
        <NavLink exact to="/team" className="nav-item">Team</NavLink>
        <NavLink exact to="/resources" className="nav-item">Resources</NavLink>
        <NavLink exact to="/contactus" className="nav-item">Contact Us</NavLink>
      </Nav>

      </Container>
      <button  className='toggle-btn' onClick={Toggle}>
        <Icon glyph="align-right" size={64} />
      </button>

  </Navbar>
  <Nav className={toggle ? "flex-column list-disp1" : "list-disp" }>
        <NavLink exact to="/" className="nav-item">Home</NavLink>
        <NavLink exact to="/events" className="nav-item">Events</NavLink>
       {/*  <NavLink exact to="/projects" className="nav-item">Projects</NavLink> */}
        <NavLink exact to="/team" className="nav-item">Team</NavLink>
        <NavLink exact to="/resources" className="nav-item">Resources</NavLink>
        <NavLink  exact to="/contactus" className="nav-item">Contact Us</NavLink>
  </Nav>
</>
    )
}
